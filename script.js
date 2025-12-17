// ===== CONFIGURATION =====
const API_CONFIGS = {
    // All APIs with proper input configurations
    apis: [
        // === QURAN ===
        {
            id: 'quran',
            name: 'Quran Reader',
            description: 'Read the Holy Quran with translations',
            icon: 'fas fa-book-quran',
            category: 'islamic',
            endpoint: 'https://apis.davidcyriltech.my.id/quran?surah=',
            method: 'GET',
            inputs: [
                {
                    id: 'surah',
                    label: 'Surah Number (1-114)',
                    type: 'number',
                    placeholder: 'Enter surah number...',
                    required: true,
                    min: 1,
                    max: 114,
                    value: '1'
                }
            ],
            resultType: 'quran'
        },

        // === DOWNLOAD TOOLS ===
        {
            id: 'youtube-search',
            name: 'YouTube MP3 Download',
            description: 'Download music from YouTube as MP3',
            icon: 'fab fa-youtube',
            category: 'download',
            endpoint: 'https://apis.davidcyriltech.my.id/play?query=',
            method: 'GET',
            inputs: [
                {
                    id: 'query',
                    label: 'Song Name',
                    type: 'text',
                    placeholder: 'Enter song name...',
                    required: true,
                    value: 'Faded'
                }
            ],
            resultType: 'audio'
        },
        {
            id: 'youtube-mp4',
            name: 'YouTube Video Download',
            description: 'Download YouTube videos in MP4 format',
            icon: 'fab fa-youtube',
            category: 'download',
            endpoint: 'https://apis.davidcyriltech.my.id/download/ytmp4?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'YouTube Video URL',
                    type: 'url',
                    placeholder: 'https://youtube.com/watch?v=...',
                    required: true
                }
            ],
            resultType: 'video'
        },
        {
            id: 'twitter-dl',
            name: 'Twitter/X Video Download',
            description: 'Download videos from Twitter/X',
            icon: 'fab fa-twitter',
            category: 'download',
            endpoint: 'https://apis.davidcyriltech.my.id/twitterV2?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Twitter/X Video URL',
                    type: 'url',
                    placeholder: 'https://x.com/...',
                    required: true
                }
            ],
            resultType: 'video'
        },
        {
            id: 'spotify-dl',
            name: 'Spotify Music Download',
            description: 'Download MP3 from Spotify tracks',
            icon: 'fab fa-spotify',
            category: 'download',
            endpoint: 'https://apis.davidcyriltech.my.id/spotifydl2?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Spotify Track URL',
                    type: 'url',
                    placeholder: 'https://open.spotify.com/track/...',
                    required: true
                }
            ],
            resultType: 'audio'
        },
        {
            id: 'tiktok-dl',
            name: 'TikTok Video Download',
            description: 'Download videos from TikTok',
            icon: 'fab fa-tiktok',
            category: 'download',
            endpoint: 'https://apis.davidcyriltech.my.id/download/tiktok?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'TikTok Video URL',
                    type: 'url',
                    placeholder: 'https://vm.tiktok.com/...',
                    required: true
                }
            ],
            resultType: 'video'
        },
        {
            id: 'facebook-dl',
            name: 'Facebook Video Download',
            description: 'Download videos from Facebook',
            icon: 'fab fa-facebook',
            category: 'download',
            endpoint: 'https://apis.davidcyriltech.my.id/facebook?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Facebook Video URL',
                    type: 'url',
                    placeholder: 'https://facebook.com/...',
                    required: true
                }
            ],
            resultType: 'video'
        },

        // === IMAGE TOOLS ===
        {
            id: 'wallpaper',
            name: 'Wallpaper Search',
            description: 'Search and download beautiful wallpapers',
            icon: 'fas fa-image',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/search/wallpaper?text=',
            method: 'GET',
            inputs: [
                {
                    id: 'text',
                    label: 'Search Term',
                    type: 'text',
                    placeholder: 'naruto, nature, abstract...',
                    required: true,
                    value: 'naruto'
                }
            ],
            resultType: 'wallpaper'
        },
        {
            id: 'imgscan',
            name: 'Image Scanner',
            description: 'Extract text from images',
            icon: 'fas fa-search',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/imgscan?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Image URL',
                    type: 'url',
                    placeholder: 'https://example.com/image.jpg',
                    required: true
                }
            ],
            resultType: 'text'
        },
        {
            id: 'remini',
            name: 'Image Enhancer',
            description: 'Enhance image quality',
            icon: 'fas fa-magic',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/remini?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Image URL',
                    type: 'url',
                    placeholder: 'https://example.com/image.jpg',
                    required: true
                }
            ],
            resultType: 'image'
        },
        {
            id: 'removebg',
            name: 'Background Remover',
            description: 'Remove background from images',
            icon: 'fas fa-cut',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/removebg?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Image URL',
                    type: 'url',
                    placeholder: 'https://example.com/image.jpg',
                    required: true
                }
            ],
            resultType: 'image'
        },
        {
            id: 'upscale',
            name: 'Image Upscaler',
            description: 'Upscale images to higher resolution',
            icon: 'fas fa-expand-alt',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/tools/upscale?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Image URL',
                    type: 'url',
                    placeholder: 'https://example.com/image.jpg',
                    required: true
                },
                {
                    id: 'width',
                    label: 'Width (optional)',
                    type: 'number',
                    placeholder: '1920'
                },
                {
                    id: 'height',
                    label: 'Height (optional)',
                    type: 'number',
                    placeholder: '1080'
                }
            ],
            resultType: 'image'
        },
        {
            id: 'html2image',
            name: 'HTML to Image',
            description: 'Convert HTML code to images',
            icon: 'fas fa-code',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/converter/html2image?html=',
            method: 'GET',
            inputs: [
                {
                    id: 'html',
                    label: 'HTML Code',
                    type: 'textarea',
                    placeholder: '<h1>Hello World</h1>',
                    required: true,
                    value: '<h1>Hello from Zaid Explorer</h1><p>Powered by David Cyril API</p>'
                }
            ],
            resultType: 'image'
        },
        {
            id: 'ssweb',
            name: 'Website Screenshot',
            description: 'Take screenshots of any website',
            icon: 'fas fa-camera',
            category: 'image',
            endpoint: 'https://apis.davidcyriltech.my.id/ssweb?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Website URL',
                    type: 'url',
                    placeholder: 'https://example.com',
                    required: true
                }
            ],
            resultType: 'image'
        },

        // === TEXT TOOLS ===
        {
            id: 'lyrics',
            name: 'Lyrics Finder',
            description: 'Find song lyrics by title and artist',
            icon: 'fas fa-music',
            category: 'text',
            endpoint: 'https://apis.davidcyriltech.my.id/lyrics?t=',
            method: 'GET',
            inputs: [
                {
                    id: 't',
                    label: 'Song Title',
                    type: 'text',
                    placeholder: 'Enter song title...',
                    required: true,
                    value: 'Faded'
                },
                {
                    id: 'a',
                    label: 'Artist Name (optional)',
                    type: 'text',
                    placeholder: 'Enter artist name...',
                    value: 'Alan Walker'
                }
            ],
            resultType: 'text'
        },
        {
            id: 'tinyurl',
            name: 'URL Shortener',
            description: 'Shorten long URLs',
            icon: 'fas fa-link',
            category: 'text',
            endpoint: 'https://apis.davidcyriltech.my.id/tinyurl?url=',
            method: 'GET',
            inputs: [
                {
                    id: 'url',
                    label: 'Long URL',
                    type: 'url',
                    placeholder: 'https://very-long-url.com/...',
                    required: true
                }
            ],
            resultType: 'text'
        },
        {
            id: 'tts',
            name: 'Text to Speech',
            description: 'Convert text to speech audio',
            icon: 'fas fa-volume-up',
            category: 'text',
            endpoint: 'https://apis.davidcyriltech.my.id/tts?text=',
            method: 'GET',
            inputs: [
                {
                    id: 'text',
                    label: 'Text to Convert',
                    type: 'textarea',
                    placeholder: 'Enter text to convert to speech...',
                    required: true,
                    value: 'Hello from Zaid Explorer Text to Speech'
                },
                {
                    id: 'voice',
                    label: 'Voice',
                    type: 'select',
                    options: ['Bianca', 'David', 'Emma', 'Brian'],
                    value: 'Bianca'
                }
            ],
            resultType: 'audio'
        },

        // === GENERATORS ===
        {
            id: 'ccgen',
            name: 'Credit Card Generator',
            description: 'Generate test credit card numbers',
            icon: 'fas fa-credit-card',
            category: 'generator',
            endpoint: 'https://apis.davidcyriltech.my.id/tools/ccgen?type=',
            method: 'GET',
            inputs: [
                {
                    id: 'type',
                    label: 'Card Type',
                    type: 'select',
                    options: ['MasterCard', 'Visa', 'Amex'],
                    value: 'MasterCard'
                },
                {
                    id: 'amount',
                    label: 'Amount (1-100)',
                    type: 'number',
                    min: 1,
                    max: 100,
                    value: '5'
                }
            ],
            resultType: 'text'
        },
        {
            id: 'flux',
            name: 'AI Image Generator',
            description: 'Generate AI images from text prompts',
            icon: 'fas fa-robot',
            category: 'generator',
            endpoint: 'https://apis.davidcyriltech.my.id/flux?prompt=',
            method: 'GET',
            inputs: [
                {
                    id: 'prompt',
                    label: 'Image Prompt',
                    type: 'text',
                    placeholder: 'Describe the image you want...',
                    required: true,
                    value: 'cat playing with ball'
                }
            ],
            resultType: 'image'
        },
        {
            id: 'bookgen',
            name: 'Book Cover Generator',
            description: 'Generate book covers with custom text',
            icon: 'fas fa-book',
            category: 'generator',
            endpoint: 'https://apis.davidcyriltech.my.id/generate/book?text=',
            method: 'GET',
            inputs: [
                {
                    id: 'text',
                    label: 'Book Title',
                    type: 'text',
                    placeholder: 'Enter book title...',
                    required: true,
                    value: 'Zaid Explorer'
                },
                {
                    id: 'size',
                    label: 'Font Size (10-100)',
                    type: 'number',
                    min: 10,
                    max: 100,
                    value: '30'
                }
            ],
            resultType: 'image'
        },
        {
            id: 'obfuscate',
            name: 'Code Obfuscator',
            description: 'Obfuscate JavaScript code',
            icon: 'fas fa-shield-alt',
            category: 'generator',
            endpoint: 'https://apis.davidcyriltech.my.id/obfuscate?code=',
            method: 'GET',
            inputs: [
                {
                    id: 'code',
                    label: 'JavaScript Code',
                    type: 'textarea',
                    placeholder: 'console.log("Hello World");',
                    required: true,
                    value: 'console.log("Hello from Zaid Explorer");'
                },
                {
                    id: 'level',
                    label: 'Obfuscation Level',
                    type: 'select',
                    options: ['low', 'medium', 'high'],
                    value: 'low'
                }
            ],
            resultType: 'text'
        },

        // === UTILITIES ===
        {
            id: 'weather',
            name: 'Weather Check',
            description: 'Check current weather for any city',
            icon: 'fas fa-cloud-sun',
            category: 'utility',
            endpoint: 'https://apis.davidcyriltech.my.id/weather?city=',
            method: 'GET',
            inputs: [
                {
                    id: 'city',
                    label: 'City Name',
                    type: 'text',
                    placeholder: 'Enter city name...',
                    required: true,
                    value: 'Abuja'
                }
            ],
            resultType: 'weather'
        },
        {
            id: 'calculator',
            name: 'Math Calculator',
            description: 'Calculate mathematical expressions',
            icon: 'fas fa-calculator',
            category: 'utility',
            endpoint: 'https://apis.davidcyriltech.my.id/tools/calculate?expr=',
            method: 'GET',
            inputs: [
                {
                    id: 'expr',
                    label: 'Math Expression',
                    type: 'text',
                    placeholder: '2+2*3, sqrt(16), sin(30)',
                    required: true,
                    value: '2+2'
                }
            ],
            resultType: 'text'
        }
    ]
};

// ===== GLOBAL VARIABLES =====
let currentPage = 1;
const itemsPerPage = 10;
let currentApi = null;

// ===== DOM ELEMENTS =====
const dom = {
    apiGrid: document.getElementById('apiGrid'),
    toolDisplay: document.getElementById('toolDisplay'),
    currentPageEl: document.getElementById('currentPage'),
    totalPagesEl: document.getElementById('totalPages'),
    pageNumbers: document.getElementById('pageNumbers'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    pageIndicator: document.getElementById('pageIndicator')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    setupEventListeners();
    hideLoading();
});

function initializeDashboard() {
    renderApiGrid();
    setupQuickAccess();
    updatePagination();
}

function renderApiGrid() {
    dom.apiGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const apisToShow = API_CONFIGS.apis.slice(startIndex, endIndex);
    
    apisToShow.forEach(api => {
        const apiCard = createApiCard(api);
        dom.apiGrid.appendChild(apiCard);
    });
    
    updatePageIndicator();
}

function createApiCard(api) {
    const card = document.createElement('button');
    card.className = 'api-btn';
    card.innerHTML = `
        <div class="btn-icon">
            <i class="${api.icon}"></i>
        </div>
        <h3 class="btn-title">${api.name}</h3>
        <p class="btn-description">${api.description}</p>
        <span class="btn-category">${api.category.toUpperCase()}</span>
    `;
    
    card.addEventListener('click', () => openTool(api));
    return card;
}

function updatePageIndicator() {
    const totalPages = Math.ceil(API_CONFIGS.apis.length / itemsPerPage);
    dom.currentPageEl.textContent = currentPage;
    dom.totalPagesEl.textContent = totalPages;
    dom.pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
}

function updatePagination() {
    const totalPages = Math.ceil(API_CONFIGS.apis.length / itemsPerPage);
    
    // Update page numbers
    dom.pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderApiGrid();
            updatePagination();
        });
        dom.pageNumbers.appendChild(pageBtn);
    }
    
    // Update navigation buttons
    dom.prevBtn.disabled = currentPage === 1;
    dom.nextBtn.disabled = currentPage === totalPages;
    
    dom.prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderApiGrid();
            updatePagination();
        }
    });
    
    dom.nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderApiGrid();
            updatePagination();
        }
    });
}

// ===== TOOL MANAGEMENT =====
function openTool(api) {
    currentApi = api;
    showToolInterface(api);
}

function showToolInterface(api) {
    let html = `
        <div class="tool-interface">
            <div class="tool-form">
                <h3 class="form-title">
                    <i class="${api.icon}"></i> ${api.name}
                </h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">${api.description}</p>
                
                <form id="apiForm">
    `;
    
    // Add input fields
    api.inputs.forEach(input => {
        if (input.type === 'textarea') {
            html += `
                <div class="input-group">
                    <label>${input.label}${input.required ? ' *' : ''}</label>
                    <textarea 
                        id="${input.id}" 
                        name="${input.id}"
                        placeholder="${input.placeholder || ''}"
                        ${input.required ? 'required' : ''}
                        rows="4"
                    >${input.value || ''}</textarea>
                </div>
            `;
        } else if (input.type === 'select') {
            const options = input.options.map(opt => 
                `<option value="${opt}" ${opt === input.value ? 'selected' : ''}>${opt}</option>`
            ).join('');
            html += `
                <div class="input-group">
                    <label>${input.label}${input.required ? ' *' : ''}</label>
                    <select id="${input.id}" name="${input.id}" ${input.required ? 'required' : ''}>
                        ${options}
                    </select>
                </div>
            `;
        } else {
            html += `
                <div class="input-group">
                    <label>${input.label}${input.required ? ' *' : ''}</label>
                    <input 
                        type="${input.type}" 
                        id="${input.id}" 
                        name="${input.id}"
                        placeholder="${input.placeholder || ''}"
                        ${input.min ? `min="${input.min}"` : ''}
                        ${input.max ? `max="${input.max}"` : ''}
                        ${input.required ? 'required' : ''}
                        value="${input.value || ''}"
                    >
                </div>
            `;
        }
    });
    
    html += `
                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Submit Request
                </button>
                </form>
            </div>
            <div class="results-container" id="resultsContainer"></div>
        </div>
    `;
    
    dom.toolDisplay.innerHTML = html;
    
    // Add form submit handler
    document.getElementById('apiForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleApiSubmit(api);
    });
}

async function handleApiSubmit(api) {
    showLoading();
    
    const formData = new FormData(document.getElementById('apiForm'));
    const params = new URLSearchParams();
    
    // Build query parameters
    api.inputs.forEach(input => {
        const value = formData.get(input.id);
        if (value) {
            params.append(input.id, value);
        }
    });
    
    // Add API key if needed
    if (api.endpoint.includes('apikey=')) {
        params.append('apikey', '');
    }
    
    try {
        const url = `${api.endpoint}${params.toString()}`;
        const response = await fetch(url, { method: api.method });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        displayResults(api, data);
    } catch (error) {
        displayError(error.message);
    } finally {
        hideLoading();
    }
}

// ===== RESULT DISPLAY FUNCTIONS =====
function displayResults(api, data) {
    const resultsContainer = document.getElementById('resultsContainer');
    
    switch (api.resultType) {
        case 'audio':
            resultsContainer.innerHTML = renderAudioResult(data);
            break;
        case 'video':
            resultsContainer.innerHTML = renderVideoResult(data);
            break;
        case 'image':
            resultsContainer.innerHTML = renderImageResult(data);
            break;
        case 'quran':
            resultsContainer.innerHTML = renderQuranResult(data);
            break;
        case 'wallpaper':
            resultsContainer.innerHTML = renderWallpaperResult(data);
            break;
        case 'weather':
            resultsContainer.innerHTML = renderWeatherResult(data);
            break;
        case 'text':
            resultsContainer.innerHTML = renderTextResult(data);
            break;
        default:
            resultsContainer.innerHTML = renderTextResult(data);
    }
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function renderAudioResult(data) {
    let html = `
        <div class="audio-result">
            <h3 class="result-title">
                <i class="fas fa-music"></i> Audio Result
            </h3>
    `;
    
    if (data.result) {
        const audio = data.result;
        html += `
            <div class="audio-info">
                ${audio.thumbnail ? `
                    <div class="audio-thumbnail">
                        <img src="${audio.thumbnail}" alt="Album Art">
                    </div>
                ` : ''}
                <div class="audio-details">
                    <h4>${audio.title || 'Audio File'}</h4>
                    ${audio.duration ? `<p>Duration: ${audio.duration}</p>` : ''}
                    ${audio.views ? `<p>Views: ${audio.views}</p>` : ''}
                    ${audio.published ? `<p>Published: ${audio.published}</p>` : ''}
                </div>
            </div>
            
            <div class="audio-player">
                <audio controls>
                    <source src="${audio.download_url || audio.url}" type="audio/mpeg">
                    Your browser does not support audio playback.
                </audio>
            </div>
            
            <div class="download-buttons">
                <a href="${audio.download_url || audio.url}" 
                   class="download-btn" 
                   download="${(audio.title || 'audio').replace(/[^a-z0-9]/gi, '_')}.mp3">
                    <i class="fas fa-download"></i> Download MP3
                </a>
                ${audio.video_url ? `
                    <a href="${audio.video_url}" 
                       class="download-btn secondary" 
                       target="_blank">
                        <i class="fas fa-external-link-alt"></i> View on YouTube
                    </a>
                ` : ''}
            </div>
        `;
    } else if (data.downloadMP3) {
        html += `
            <div class="audio-info">
                <div class="audio-details">
                    <h4>${data.title || 'Spotify Track'}</h4>
                    ${data.type ? `<p>Type: ${data.type}</p>` : ''}
                </div>
            </div>
            
            <div class="audio-player">
                <audio controls>
                    <source src="${data.downloadMP3}" type="audio/mpeg">
                    Your browser does not support audio playback.
                </audio>
            </div>
            
            <div class="download-buttons">
                <a href="${data.downloadMP3}" 
                   class="download-btn" 
                   download="${(data.title || 'spotify_audio').replace(/[^a-z0-9]/gi, '_')}.mp3">
                    <i class="fas fa-download"></i> Download MP3
                </a>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function renderVideoResult(data) {
    let html = `
        <div class="video-result">
            <h3 class="result-title">
                <i class="fas fa-video"></i> Video Result
            </h3>
    `;
    
    if (Array.isArray(data.result)) {
        // Twitter video with multiple qualities
        const videos = data.result;
        html += `
            <div class="video-player">
                <video controls>
                    <source src="${videos[0].url}" type="video/mp4">
                    Your browser does not support video playback.
                </video>
            </div>
            
            <div class="video-quality">
        `;
        
        videos.forEach(video => {
            html += `
                <a href="${video.url}" 
                   class="quality-btn" 
                   download="twitter_video_${video.quality}.mp4">
                    <i class="fas fa-download"></i> ${video.quality}
                </a>
            `;
        });
        
        html += `
            </div>
        `;
    } else if (data.result && data.result.download_url) {
        // YouTube video
        const video = data.result;
        html += `
            <div class="video-info">
                <h4>${video.title || 'Video File'}</h4>
                ${video.quality ? `<p>Quality: ${video.quality}</p>` : ''}
            </div>
            
            <div class="video-player">
                <video controls>
                    <source src="${video.download_url}" type="video/mp4">
                    Your browser does not support video playback.
                </video>
            </div>
            
            <div class="download-buttons">
                <a href="${video.download_url}" 
                   class="download-btn" 
                   download="${(video.title || 'video').replace(/[^a-z0-9]/gi, '_')}.mp4">
                    <i class="fas fa-download"></i> Download ${video.quality || 'Video'}
                </a>
            </div>
        `;
    }
    
    html += '</div>';
    return html;
}

function renderImageResult(data) {
    let html = `
        <div class="image-result">
            <h3 class="result-title">
                <i class="fas fa-image"></i> Image Result
            </h3>
            
            <div class="image-display">
    `;
    
    if (data.url) {
        html += `
            <img src="${data.url}" alt="Generated Image">
            <div class="download-buttons">
                <a href="${data.url}" 
                   class="download-btn" 
                   download="image_${Date.now()}.jpg">
                    <i class="fas fa-download"></i> Download Image
                </a>
            </div>
        `;
    } else if (data.download_link) {
        html += `
            <img src="${data.download_link}" alt="Downloaded Image">
            <div class="download-buttons">
                <a href="${data.download_link}" 
                   class="download-btn" 
                   download="${data.name || 'file'}.apk">
                    <i class="fas fa-download"></i> Download ${data.name || 'File'}
                </a>
            </div>
        `;
    }
    
    html += `
            </div>
        </div>
    `;
    return html;
}

function renderQuranResult(data) {
    if (!data.surah) {
        return '<div class="error-message"><i class="fas fa-exclamation-circle"></i><h4>No surah data found</h4></div>';
    }
    
    let html = `
        <div class="quran-result">
            <div class="quran-header">
                <h4>Surah ${data.surah.name} (${data.surah.englishName})</h4>
                <p>${data.surah.englishNameTranslation} • ${data.surah.revelationType}</p>
            </div>
    `;
    
    if (data.surah.ayahs) {
        data.surah.ayahs.forEach(ayah => {
            html += `
                <div class="ayah-container">
                    <div class="ayah-arabic">${ayah.text}</div>
                    <div class="ayah-translation">
                        <strong>${ayah.numberInSurah}.</strong> ${ayah.translation}
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

function renderWallpaperResult(data) {
    if (!data.wallpapers || data.wallpapers.length === 0) {
        return '<div class="error-message"><i class="fas fa-exclamation-circle"></i><h4>No wallpapers found</h4></div>';
    }
    
    let html = `
        <div class="wallpaper-result">
            <h3 class="result-title">
                <i class="fas fa-images"></i> Wallpaper Results
            </h3>
            
            <div class="wallpaper-grid">
    `;
    
    data.wallpapers.forEach((wallpaper, index) => {
        html += `
            <div class="wallpaper-item">
                <img src="${wallpaper.url}" alt="Wallpaper ${index + 1}" loading="lazy">
                <div class="wallpaper-overlay">
                    <a href="${wallpaper.url}" class="wallpaper-download" download>
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    return html;
}

function renderWeatherResult(data) {
    if (!data.main) {
        return '<div class="error-message"><i class="fas fa-exclamation-circle"></i><h4>No weather data found</h4></div>';
    }
    
    const icon = data.weather?.[0]?.main || 'cloud';
    const temp = Math.round(data.main.temp);
    const desc = data.weather?.[0]?.description || 'Unknown';
    
    return `
        <div class="weather-result">
            <div class="weather-icon">
                <i class="fas fa-${getWeatherIcon(icon)}"></i>
            </div>
            <div class="weather-temp">${temp}°C</div>
            <div class="weather-desc">${desc}</div>
            
            <div class="weather-details">
                <div class="weather-detail">
                    <i class="fas fa-wind"></i>
                    Wind Speed
                    <span>${data.wind?.speed || 0} m/s</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-tint"></i>
                    Humidity
                    <span>${data.main.humidity}%</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-compress-alt"></i>
                    Pressure
                    <span>${data.main.pressure} hPa</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-thermometer-half"></i>
                    Feels Like
                    <span>${Math.round(data.main.feels_like)}°C</span>
                </div>
            </div>
        </div>
    `;
}

function renderTextResult(data) {
    let content = '';
    
    if (typeof data === 'string') {
        content = data;
    } else if (data.lyrics) {
        content = data.lyrics;
    } else if (data.short_url) {
        content = `Short URL: ${data.short_url}`;
    } else if (data.result) {
        content = JSON.stringify(data.result, null, 2);
    } else {
        content = JSON.stringify(data, null, 2);
    }
    
    return `
        <div class="text-result">
            <h3 class="result-title">
                <i class="fas fa-file-alt"></i> Text Result
            </h3>
            <div class="text-content">${content}</div>
        </div>
    `;
}

function displayError(message) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h4>Error Occurred</h4>
            <p>${message}</p>
            <button class="submit-btn mt-20" onclick="showToolInterface(currentApi)">
                <i class="fas fa-redo"></i> Try Again
            </button>
        </div>
    `;
}

// ===== HELPER FUNCTIONS =====
function getWeatherIcon(condition) {
    const icons = {
        'Clear': 'sun',
        'Clouds': 'cloud',
        'Rain': 'cloud-rain',
        'Snow': 'snowflake',
        'Thunderstorm': 'bolt',
        'Drizzle': 'cloud-rain',
        'Mist': 'smog',
        'Fog': 'smog'
    };
    return icons[condition] || 'cloud';
}

function showLoading() {
    dom.loadingOverlay.classList.add('active');
}

function hideLoading() {
    dom.loadingOverlay.classList.remove('active');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== QUICK ACCESS =====
function setupQuickAccess() {
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const apiId = btn.dataset.api;
            const api = API_CONFIGS.apis.find(a => a.id === apiId);
            if (api) {
                openTool(api);
                // Scroll to tool display
                document.querySelector('.current-tool').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Handle window resize
    window.addEventListener('resize', () => {
        // Re-render grid on resize for better responsiveness
        renderApiGrid();
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.querySelector('.results-container')) {
            // Clear results on ESC
            document.getElementById('resultsContainer').innerHTML = '';
        }
    });
}

// ===== PUBLIC FUNCTIONS (for HTML onclick) =====
window.openTool = openTool;
window.showToolInterface = showToolInterface;
