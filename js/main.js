document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const loaderProgress = document.getElementById('loader-progress');
    const mainContent = document.querySelector('main');
    
    // --- LOADER SIMULATION ---
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress > 99) { progress = 99; }
        loaderProgress.style.width = progress + '%';
    }, 100);

    // --- MAIN APP LOGIC ---
    const updatesToLoad = ['update-6', 'update-5'];

    const processUpdate = (data, templateHTML) => {
        const target = document.getElementById('timeline-content-target');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = templateHTML.trim();
        const updateElement = tempDiv.firstElementChild;

        if (!updateElement) {
            console.error('Could not parse template for update:', data.id);
            return;
        }

        // Wrap the update element so all behaviors are scoped per-update
        const wrapper = document.createElement('div');
        wrapper.className = 'timeline-update';
        wrapper.dataset.updateId = data.id;
        wrapper.__updateData = data; // attach update's data for scoped lookups
        wrapper.appendChild(updateElement);

        // Query elements from the wrapper (scoped)
        const newUnitsGrid = wrapper.querySelector(`#new-units-grid-${data.id}`);
        const newPassivesGrid = wrapper.querySelector(`#new-passives-grid-${data.id}`);
        const detailsPanel = wrapper.querySelector(`.unit-details-panel-instance`);
        const bannerContainer = wrapper.querySelector('.banner-rates-container');
        const contractsTrack = wrapper.querySelector('.carousel-track');
        const mainContentColumn = wrapper.querySelector('.main-content-column');

        // Render content into the template (scoped)
        if (newUnitsGrid) App.Components.populateGrid(newUnitsGrid, data.newAdditions, data.allUnits);
        if (newPassivesGrid) App.Components.populateGrid(newPassivesGrid, data.newPassives, data.allUnits);
        if (bannerContainer) App.Components.populateBanner(bannerContainer, data.bannerRates);
        if (contractsTrack) App.Components.populateContracts(contractsTrack, data.contracts);
        if (detailsPanel) {
            // insert the initial placeholder/details content
            detailsPanel.innerHTML = App.Components.createDetailsPanel(null);

            // constrain the panel to the initial placeholder height (measure once)
            if (!detailsPanel.dataset.initialMaxHeight) {
                // measure after paint to get accurate height
                requestAnimationFrame(() => {
                    const h = Math.round(detailsPanel.getBoundingClientRect().height || 0);
                    if (h > 0) {
                        detailsPanel.style.maxHeight = `${h}px`;
                        detailsPanel.dataset.initialMaxHeight = h;
                    }
                });
            }
        }

        // Append the wrapper (not the raw element) so spacing and scoping apply
        target.appendChild(wrapper);

        // --- find unit selector element (unit grid) for this update ---
        const unitSelectorEl = newUnitsGrid || newPassivesGrid || wrapper.querySelector('.unit-grid');

        // Setup event listeners scoped to this wrapper / update
        if (mainContentColumn && detailsPanel && unitSelectorEl) {
            // Click handler — update details; do NOT change the panel max-height.
            // The panel was constrained to its initial placeholder height above and will scroll internally.
            mainContentColumn.addEventListener('click', (event) => {
                const card = event.target.closest('.unit-card');
                if (!card) return;

                // Deselect all other cards on the page
                document.querySelectorAll('.unit-card.selected').forEach(selected => selected.classList.remove('selected'));
                card.classList.add('selected');

                const unitName = card.dataset.unitName;
                const unitData = window.loadedUnitData.find(u => u.name === unitName);

                detailsPanel.innerHTML = App.Components.createDetailsPanel(unitData);

                // Animate the new content in (inner scroll container animates)
                const detailsInner = detailsPanel.querySelector('.details-content-wrapper');
                if (detailsInner) {
                    anime({ targets: detailsInner, opacity: [0, 1], translateY: [10, 0], duration: 500, easing: 'easeOutExpo' });
                }
                // keep the previously measured max-height so content will scroll instead of expanding the panel
            });
        }

        // Initialize contracts carousel for this wrapper (scoped)
        if (contractsTrack) App.Components.initContractsCarousel(wrapper);
    };

    const startApp = async () => {
        // --- FIX 2: Define 'target' in a higher scope ---
        const target = document.getElementById('timeline-content-target');
        window.loadedUnitData = []; // Store all unit data globally for easy searching
        // --- END FIX 2 ---
        try {
            for (const updateId of updatesToLoad) {
                const [templateResponse, dataScriptResponse] = await Promise.all([
                    fetch(`updates/${updateId}/template.html`),
                    fetch(`updates/${updateId}/data.js`)
                ]);

                if (!templateResponse.ok) throw new Error(`Template not found for ${updateId}`);
                if (!dataScriptResponse.ok) throw new Error(`Data script not found for ${updateId}`);

                const templateHTML = await templateResponse.text();
                const dataScriptText = await dataScriptResponse.text();
                const data = new Function(`${dataScriptText}; return updateData;`)();

                // Add this update's units to our global store
                window.loadedUnitData.push(...data.allUnits);
                
                processUpdate(data, templateHTML);
            }
        } catch (error) {
            console.error("Failed to load updates:", error);
            // Now 'target' is accessible here
            target.innerHTML = `<p style="color:red; text-align:center;">Error: Could not load update content. Check console for details.</p>`;
        }

        clearInterval(interval);
        loaderProgress.style.width = '100%';
        setTimeout(() => {
            loaderWrapper.style.opacity = '0';
            loaderWrapper.addEventListener('transitionend', () => loaderWrapper.style.display = 'none', { once: true });
            mainContent.classList.add('loaded');
            
            document.querySelector(".text-container").innerHTML = Array(9).fill('<div class="text-layer"><span>あいうえおかきくけこさしすせそあいうえおかきくけこさしすせそ</span></div>').join('');
            App.Components.initAnimations();
        }, 500);
    };

    startApp();
});