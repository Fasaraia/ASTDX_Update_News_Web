const App = {
    Components: {
        // Generates the HTML for a single ability section (Manual or Passive)
        // context: optional string, e.g. 'details' to render horizontal/scrollable layout
        generateAbilityHTML: (abilityData, defaultTitle, context) => {
            if (!abilityData) return '';
            const cols = Array.isArray(abilityData.columns) ? abilityData.columns : [];
            const title = abilityData.title || defaultTitle;

            // If rendering inside the details panel and this is a Passive ability with multiple columns,
            // render each column as its own stacked ability-section (Passive 1, Passive 2, ...)
            if (context === 'details' && /passive/i.test(defaultTitle) && cols.length > 1) {
                return cols.map((col, idx) => {
                    const contentHTML = Array.isArray(col.content) 
                        ? col.content.map(line => `<p>${line}</p>`).join('') 
                        : '';
                    return `
                        <div class="ability-section">
                            <strong>${title}</strong> <!-- parent title stays here -->
                            <div class="passive-columns" style="--grid-columns: 1;">
                                <div class="passive-column-content">
                                    ${col.heading ? `<h3>${col.heading}</h3>` : ''}
                                    ${contentHTML}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            // Default behavior: single ability section with columns rendered inside (horizontal or grid as needed)
            const columnsHTML = cols.map(col => {
                const contentHTML = Array.isArray(col.content) ? col.content.map(line => `<p>${line}</p>`).join('') : '';
                return `
                    <div> 
                        ${col.heading ? `<h3>${col.heading}</h3>` : ''} 
                        <div class="passive-column-content">${contentHTML}</div>
                    </div>
                `;
            }).join('<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">');

            const gridCols = abilityData.columnCount || Math.max(1, cols.length);
            const colsClass = context === 'details' ? 'passive-columns details-passive-columns' : 'passive-columns';

            return `
                <div class="ability-section">
                    <strong>${title}</strong>
                    <div class="${colsClass}" style="--grid-columns: ${gridCols};">${columnsHTML}</div>
                </div>`;
        },

        // Creates the entire unit details panel
        createDetailsPanel: (unitData) => {
            if (!unitData) {
                return `<div class="details-placeholder"><p>Click a unit to see details.</p></div>`;
            }
            const subheaderHTML = `<p class="details-subheader"><span class="rarity-${unitData.rarity.toLowerCase().replace(' ', '-')}">${unitData.rarity}</span> • <span class="subheader-placement">${unitData.placement}</span></p>`;
            const elementClass = `element-${unitData.element.toLowerCase()}`;
            
            // manual ability (render if present)
            const manualAbilityHTML = App.Components.generateAbilityHTML(unitData.manualAbility, 'Manual Ability:', 'details');
            
            // passive ability: if none or empty, render a skeleton placeholder; otherwise render as before
            let passiveHTML = '';
            if (!unitData.passive || !Array.isArray(unitData.passive.columns) || unitData.passive.columns.length === 0) {
                passiveHTML = `
                    <div class="ability-section skeleton">
                        <strong>Passive Ability</strong>
                        <div class="passive-columns details-passive-columns" style="--grid-columns:1;">
                            <div class="passive-column-content">
                                <p class="no-passive-text">This unit has no passive</p>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                passiveHTML = App.Components.generateAbilityHTML(unitData.passive, 'Passive Ability:', 'details');
            }

            const divider = manualAbilityHTML && passiveHTML ? '<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">' : '';

            return `
                <div class="details-content-wrapper">
                    <div class="details-unit-info">
                        <div class="details-header">
                            <img id="details-unit-image" src="${unitData.image}" alt="${unitData.name}">
                            <div class="details-title-group">
                                <h2 id="details-unit-name">${unitData.name}</h2>
                                ${subheaderHTML}
                            </div>
                        </div>
                        <div class="details-tags-container">
                            <div class="details-tag tag-element ${elementClass}"><span>${unitData.element}</span></div>
                            <div class="details-tag tag-method"><span>${unitData.method}</span></div>
                        </div>

                        ${manualAbilityHTML ? `<div class="manual-ability-wrapper">${manualAbilityHTML}</div>` : ''}
                        ${passiveHTML ? `<div class="passive-in-info">${divider}${passiveHTML}</div>` : ''}
                    </div>

                    <div id="details-unit-abilities">
                        <!-- passive was moved into .details-unit-info for in-info scrolling -->
                    </div>
                </div>`;
        },

        populateGrid: (gridContainer, unitNames, allUnitsData) => {
            if (!gridContainer) return;
            const filteredUnits = allUnitsData.filter(unit => unitNames.includes(unit.name));
            if (filteredUnits.length > 0) {
                gridContainer.innerHTML = filteredUnits.map(unit => `
                    <div class="unit-card" data-unit-name="${unit.name}">
                        <img src="${unit.image}" alt="${unit.name}">
                        <p>${unit.name}</p>
                    </div>`).join('');
            } else {
                // If there are no units to show, hide the parent content box
                if (gridContainer.closest('.content-box')) {
                    gridContainer.closest('.content-box').style.display = 'none';
                }
            }
        },

        populateBanner: (container, bannerData) => {
            if (!container || bannerData.length === 0) return;
            container.innerHTML = bannerData.map(tier => `
                <div class="rate-tier tier-${tier.tier.toLowerCase().replace(/\s+/g, '')}">
                    <div class="rate-header">
                        <span>${tier.tier}</span>
                        <span>(${tier.chance})</span>
                    </div>
                    <div class="rate-units-grid">
                        ${tier.units.map(unit => `
                            <div class="banner-unit-card">
                                <span class="banner-unit-name">${unit.name}</span>
                                <img src="${unit.image}" alt="${unit.name}">
                                <div class="unit-chance-overlay">${unit.dropChance}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        },

        // --- FIX 1: Corrected function logic ---
        populateContracts: (track, contractsData) => {
            if (!track || !contractsData || contractsData.length === 0) return;
            track.innerHTML = contractsData.map(contract => `
                <div class="carousel-item">
                    <div class="contract-group">
                        <ul class="contract-list">
                            <li>
                                <div class="contract-rank-label">Mission</div>
                                <h4 class="contract-mission-name">${contract.rank} Mission</h4>
                                <div class="contract-meta">
                                    <div class="meta-required">${contract.rank} can participate</div>
                                    <div class="meta-refresh">Refresh: ${contract.refresh}</div>
                                </div>
                                <p class="contract-desc">${contract.desc}</p>
                                <div class="contract-note">${contract.rewards}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            `).join('');
        },
        // --- END FIX 1 ---

        initContractsCarousel: (updateElement) => {
             const wrapper = updateElement.querySelector('.contracts-carousel-wrapper');
             if (!wrapper) return;

             const track = wrapper.querySelector('.carousel-track');
             const prevBtn = wrapper.querySelector('.carousel-prev');
             const nextBtn = wrapper.querySelector('.carousel-next');
             const viewport = wrapper.querySelector('.carousel-viewport');
             
             const slides = Array.from(track.children);
             if (!slides.length) {
                 wrapper.style.display = 'none';
                 return;
             }

             let currentIndex = 0;

             const updateDimensions = () => {
                 const viewportWidth = viewport.clientWidth;
                 if (viewportWidth === 0) return;
                 slides.forEach(slide => { slide.style.width = `${viewportWidth}px`; });
                 track.style.width = `${slides.length * viewportWidth}px`;
             };

             const goToSlide = (index, animate = true) => {
                 currentIndex = Math.max(0, Math.min(index, slides.length - 1));
                 const offset = -currentIndex * viewport.clientWidth;
                 if (animate) {
                     anime({ targets: track, translateX: offset, duration: 450, easing: 'easeOutCubic' });
                 } else {
                     track.style.transform = `translateX(${offset}px)`;
                 }
                 prevBtn.disabled = currentIndex === 0;
                 nextBtn.disabled = currentIndex === slides.length - 1;
                 slides.forEach((slide, i) => slide.classList.toggle('active', i === currentIndex));
             };

             prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
             nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
             
             let resizeTimeout;
             window.addEventListener('resize', () => {
                 clearTimeout(resizeTimeout);
                 resizeTimeout = setTimeout(() => {
                     updateDimensions(); 
                     goToSlide(currentIndex, false);
                 }, 100);
             });

             updateDimensions(); 
             goToSlide(0, false);
        },

// Replace the syncDetailsPanelHeight function in your App.Components with this:

syncDetailsPanelHeight: (opts = {}) => {
    const rootSelector = opts.rootSelector || 'body';
    const mainContentSelector = opts.mainContentSelector || '.main-content'; // Adjust this selector to match your main content column
    const detailSelector = opts.detailSelector || '.unit-details-panel-instance';
    
    const root = document.querySelector(rootSelector);
    if (!root) return;

    let initialHeight = null;
    let isInitialized = false;

    const setInitialHeight = () => {
        const mainContent = root.querySelector(mainContentSelector);
        if (!mainContent) return false;
        
        // Get the natural height of the main content column
        const rect = mainContent.getBoundingClientRect();
        initialHeight = rect.height;
        isInitialized = true;
        return true;
    };

    const updateDetailsPanelHeight = () => {
        const detailsPanels = Array.from(root.querySelectorAll(detailSelector));
        if (!detailsPanels.length || !isInitialized || !initialHeight) return;

        detailsPanels.forEach(panel => {
            panel.style.boxSizing = 'border-box';
            panel.style.height = `${initialHeight}px`;
            panel.style.minHeight = `${initialHeight}px`;
            panel.style.maxHeight = `${initialHeight}px`;
        });
    };

    const initialize = () => {
        // Try to set initial height
        if (setInitialHeight()) {
            updateDetailsPanelHeight();
        } else {
            // If main content isn't ready yet, try again after a short delay
            setTimeout(initialize, 100);
        }
    };

    // Handle window resize - maintain the same height ratio
    let resizeTimeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (setInitialHeight()) {
                updateDetailsPanelHeight();
            }
        }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Observer for dynamic content changes that might affect main content height
    const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        
        mutations.forEach(mutation => {
            // Check if the mutation affects the main content area
            if (mutation.target.matches && mutation.target.matches(mainContentSelector)) {
                shouldUpdate = true;
            } else if (mutation.target.querySelector && mutation.target.querySelector(mainContentSelector)) {
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            // Debounce updates
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (setInitialHeight()) {
                    updateDetailsPanelHeight();
                }
            }, 100);
        }
    });

    observer.observe(root, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['style', 'class']
    });

    // Initialize
    initialize();

    // Return cleanup function
    return {
        update: () => {
            if (setInitialHeight()) {
                updateDetailsPanelHeight();
            }
        },
        disconnect: () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
            clearTimeout(resizeTimeout);
        }
    };
},
        
        initAnimations: () => {
          const header = document.querySelector('.main-header');
          header.innerHTML = header.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
          
          anime.timeline({ easing: 'easeOutExpo', duration: 750 })
            .add({ targets: '.main-header .letter', translateY: [20, 0], opacity: [0, 1], duration: 1200, delay: anime.stagger(50) })
            .add({ targets: '.sub-text', translateY: [15, 0], opacity: [0, 1], duration: 800 }, '-=1000')
            .add({ targets: '.update-title, .update-date', translateY: [15, 0], opacity: [0, 1], delay: anime.stagger(100) }, '-=800')
            .add({ targets: '.content-box, .unit-details-panel-instance', translateY: [20, 0], opacity: [0, 1], delay: anime.stagger(100) }, '-=600')
            .add({ targets: '.unit-card', translateY: [15, 0], opacity: [0, 1], delay: anime.stagger(40) }, '-=800');
        },
    }
};