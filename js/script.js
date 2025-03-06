// 预加载动画
document.addEventListener('DOMContentLoaded', () => {
    // 创建预加载动画元素
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = '系统启动中...';
    
    preloader.appendChild(loadingText);
    document.body.appendChild(preloader);
    
    // 模拟加载时间
    setTimeout(() => {
        loadingText.textContent = '加载资源...';
    }, 1000);
    
    setTimeout(() => {
        loadingText.textContent = '初始化界面...';
    }, 2000);
    
    // 页面加载完成后，移除预加载动画
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            preloader.remove();
            initTypewriterEffect();
            initGlitchEffects();
            addGraffitiElements();
            moveGraffitiToBackground();
            createBackgroundElements();
            createRandomCornerElements();
            animateSkillBars();
            initNeonCursorEffect();
            initCursorTrailEffect();
            initScrollIndicator();
            initBackToTop();
            initProfileImageToggle();
        }, 500);
    }, 3000);
});

// 打字机效果
function initTypewriterEffect() {
    const typingElement = document.querySelector('.typing');
    const cursorElement = document.querySelector('.cursor');
    const phrases = [
        '广东药科大学毕业生',
        '擅长团队管理与协作',
        '目标：AI训练师'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = phrases[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // 暂停时间
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % phrases.length;
            typingSpeed = 500; // 切换文本间隔
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// 随机故障效果
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch, .neon-text');
    const titleElement = document.querySelector('h1.glitch');
    
    // 定期为标题添加临时故障效果
    function titleGlitch() {
        titleElement.classList.add('temp-glitch');
        
        setTimeout(() => {
            titleElement.classList.remove('temp-glitch');
        }, 800);
        
        // 随机时间间隔（2-6秒）
        const nextGlitchTime = 2000 + Math.random() * 4000;
        setTimeout(titleGlitch, nextGlitchTime);
    }
    
    // 立即开始标题故障效果
    setTimeout(titleGlitch, 1000);
    
    function randomGlitch() {
        // 随机选择一个元素应用故障效果
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        
        // 应用临时故障效果类
        randomElement.classList.add('temp-glitch');
        
        // 移除临时故障效果类
        setTimeout(() => {
            randomElement.classList.remove('temp-glitch');
        }, 200);
        
        // 随机设置下一次故障效果的时间（3-10秒之间）
        const nextGlitchTime = 3000 + Math.random() * 7000;
        setTimeout(randomGlitch, nextGlitchTime);
    }
    
    // 开始随机故障效果循环
    setTimeout(randomGlitch, 5000);
}

// 滚动效果
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.cyber-panel');
    const scrollPosition = window.scrollY + window.innerHeight * 0.8;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (scrollPosition > sectionTop) {
            section.classList.add('fade-in');
        }
    });
});

// 添加额外的涂鸦效果
function addGraffitiElements() {
    const graffiti = [
        { icon: '⚡', color: 'var(--neon-yellow)', size: '30px' },
        { icon: '☣', color: 'var(--neon-green)', size: '25px' },
        { icon: '☢', color: 'var(--neon-pink)', size: '28px' },
        { icon: '⚙', color: 'var(--neon-blue)', size: '32px' },
        { icon: '❯❯', color: 'var(--neon-purple)', size: '20px' },
        { icon: '▓▒░', color: 'var(--neon-green)', size: '24px' },
        { icon: '✴', color: 'var(--neon-pink)', size: '26px' },
        { icon: '▣', color: 'var(--neon-blue)', size: '22px' },
    ];
    
    const container = document.createElement('div');
    container.className = 'graffiti-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    
    // 创建10个随机涂鸦元素
    for (let i = 0; i < 10; i++) {
        const randomGraffiti = graffiti[Math.floor(Math.random() * graffiti.length)];
        
        const graffitiElement = document.createElement('div');
        graffitiElement.textContent = randomGraffiti.icon;
        graffitiElement.style.position = 'absolute';
        graffitiElement.style.color = randomGraffiti.color;
        graffitiElement.style.fontSize = randomGraffiti.size;
        graffitiElement.style.textShadow = `0 0 10px ${randomGraffiti.color}`;
        graffitiElement.style.opacity = '0.7';
        graffitiElement.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        
        // 随机位置
        const top = 5 + Math.random() * 90; // 5-95%
        const left = 5 + Math.random() * 90; // 5-95%
        
        graffitiElement.style.top = `${top}%`;
        graffitiElement.style.left = `${left}%`;
        
        container.appendChild(graffitiElement);
    }
    
    document.body.appendChild(container);
}

// 为技能条添加动画
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// 鼠标跟随霓虹光效果
function initNeonCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'neon-cursor';
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.background = 'transparent';
    cursor.style.border = '1px solid var(--neon-blue)';
    cursor.style.boxShadow = '0 0 15px var(--neon-blue)';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.opacity = '0';
    cursor.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(cursor);
    
    let cursorVisible = false;
    
    // 鼠标移动时跟随效果
    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        if (!cursorVisible) {
            cursorVisible = true;
            cursor.style.opacity = '0.6';
        }
    });
    
    // 鼠标离开页面时隐藏
    document.addEventListener('mouseout', () => {
        cursorVisible = false;
        cursor.style.opacity = '0';
    });
}

// 添加鼠标拖尾效果
function initCursorTrailEffect() {
    const colors = ['blue', 'pink', 'green', '']; // '' 代表默认的青色
    const maxTrails = 25;
    const trails = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let movingTimeout;

    // 追踪鼠标位置
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMoving = true;
        clearTimeout(movingTimeout);
        movingTimeout = setTimeout(() => {
            isMoving = false;
        }, 100);
    });

    // 创建拖尾元素
    function createTrailElement() {
        const trail = document.createElement('div');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        trail.className = `cursor-trail ${randomColor}`;
        trail.style.opacity = '0';
        document.body.appendChild(trail);
        return trail;
    }

    // 初始化拖尾元素
    for (let i = 0; i < maxTrails; i++) {
        trails.push({
            element: createTrailElement(),
            x: 0,
            y: 0,
            age: i * (100 / maxTrails), // 不同的初始年龄创造错落感
            active: false
        });
    }

    // 更新拖尾位置
    function updateTrails() {
        if (isMoving) {
            // 找到最老的未激活的拖尾或最老的已激活拖尾
            let oldestTrail = trails[0];
            for (let i = 1; i < trails.length; i++) {
                if (!trails[i].active || trails[i].age > oldestTrail.age) {
                    oldestTrail = trails[i];
                }
            }

            oldestTrail.x = mouseX;
            oldestTrail.y = mouseY;
            oldestTrail.age = 0;
            oldestTrail.active = true;
            oldestTrail.element.style.left = `${mouseX}px`;
            oldestTrail.element.style.top = `${mouseY}px`;
            oldestTrail.element.style.opacity = '1';
        }

        // 随着年龄增长，降低透明度
        for (const trail of trails) {
            if (trail.active) {
                trail.age += 1;
                trail.element.style.opacity = Math.max(0, 1 - (trail.age / 50));
                
                if (trail.age >= 50) {
                    trail.active = false;
                    trail.element.style.opacity = '0';
                }
            }
        }

        requestAnimationFrame(updateTrails);
    }

    updateTrails();
}

// 创建背景元素
function createBackgroundElements() {
    const container = document.getElementById('background-elements');
    const colors = [
        'var(--neon-blue)', 
        'var(--neon-pink)', 
        'var(--neon-green)', 
        'var(--neon-purple)', 
        'var(--neon-cyan)',
        'var(--neon-yellow)'
    ];
    
    const symbols = ['⚡', '☣', '☢', '⚙', '❯❯', '▓▒░', '✴', '▣', '□', '△', '✧', '◈', '⟁', '⌬', '⌘'];
    const elementTypes = ['square', 'circle', 'symbol', 'line', 'grid', 'dot-grid'];
    
    // 创建 30 个随机背景元素
    for (let i = 0; i < 30; i++) {
        const elementType = elementTypes[Math.floor(Math.random() * elementTypes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const element = document.createElement('div');
        element.className = `background-element ${elementType}`;
        
        // 随机位置
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.color = color;
        element.style.borderColor = color;
        
        // 随机旋转
        const rotation = Math.random() * 360;
        element.style.transform = `rotate(${rotation}deg)`;
        
        // 随机动画延迟
        const delay = Math.random() * 10;
        element.style.animationDelay = `${delay}s`;
        
        // 如果是符号类型，设置内容
        if (elementType === 'symbol') {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            element.textContent = symbol;
        }
        
        container.appendChild(element);
    }
}

// 移动涂鸦元素到背景容器
function moveGraffitiToBackground() {
    const container = document.getElementById('background-elements');
    const graffitiContainer = document.querySelector('.graffiti-container');
    
    if (graffitiContainer) {
        // 将涂鸦元素的子元素移动到背景容器
        while (graffitiContainer.firstChild) {
            const element = graffitiContainer.firstChild;
            element.classList.add('background-element');
            container.appendChild(element);
        }
        
        // 移除原涂鸦容器
        graffitiContainer.remove();
    }
}

// 创建随机角落装饰
function createRandomCornerElements() {
    const container = document.getElementById('background-elements');
    const colors = [
        'var(--neon-blue)', 
        'var(--neon-pink)', 
        'var(--neon-green)', 
        'var(--neon-purple)', 
        'var(--neon-cyan)'
    ];
    
    // 创建12个随机角落装饰
    for (let i = 0; i < 12; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const element = document.createElement('div');
        element.className = 'background-element corner-element';
        
        // 随机位置
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        // 设置样式
        element.style.position = 'absolute';
        element.style.width = '30px';
        element.style.height = '30px';
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.borderTop = `2px solid ${color}`;
        element.style.borderLeft = `2px solid ${color}`;
        element.style.opacity = '0.8';
        element.style.boxShadow = `0 0 10px ${color}`;
        
        // 随机旋转
        const rotation = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, 270度
        element.style.transform = `rotate(${rotation}deg)`;
        
        // 随机动画延迟
        const delay = Math.random() * 5;
        element.style.animation = `float ${10 + Math.random() * 10}s infinite ease-in-out ${delay}s`;
        
        container.appendChild(element);
    }
}

// 处理滚动指示器
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollDownBtn = document.querySelector('.scroll-down');
    
    // 点击滚动按钮滚动到内容区域
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 监听滚动事件，当页面滚动时隐藏指示器
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && scrollIndicator) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '0.8';
        }
    });
}

// 处理返回顶部功能
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 初始化头像切换功能
function initProfileImageToggle() {
    const profileImage = document.getElementById('profile-image');
    
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            const currentState = this.getAttribute('data-current');
            let nextState;
            let nextSrc;
            
            // 切换状态：默认 -> 像素 -> 真实 -> 默认
            if (currentState === 'default') {
                nextState = 'pixel';
                nextSrc = this.getAttribute('data-pixel');
            } else if (currentState === 'pixel') {
                nextState = 'real';
                nextSrc = this.getAttribute('data-real');
            } else {
                nextState = 'default';
                nextSrc = this.getAttribute('data-default');
            }
            
            // 创建镭射扫描效果
            const container = this.parentElement;
            const laserScan = document.createElement('div');
            laserScan.className = 'laser-scan-effect';
            container.appendChild(laserScan);
            
            // 开始扫描动画
            setTimeout(() => {
                laserScan.style.top = '100%';
                
                // 当扫描完成后，切换图片并移除扫描效果
                setTimeout(() => {
                    this.setAttribute('data-current', nextState);
                    this.src = nextSrc;
                    
                    // 添加渐变效果
                    this.style.opacity = '0';
                    this.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
                    
                    setTimeout(() => {
                        this.style.transition = 'clip-path 0.8s ease-out, opacity 0.8s ease-out';
                        this.style.opacity = '1';
                        this.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
                        
                        // 移除扫描效果
                        setTimeout(() => {
                            laserScan.remove();
                            this.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            this.style.clipPath = '';
                        }, 800);
                    }, 100);
                }, 600);
            }, 100);
        });
    }
}

// 微信二维码弹窗功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取弹窗元素
    const modal = document.getElementById('qrcode-modal');
    const wechatIcon = document.getElementById('wechat-icon');
    const closeButton = document.querySelector('.close-button');
    
    // 点击微信图标打开弹窗
    wechatIcon.addEventListener('click', function() {
        modal.style.display = 'block';
        // 添加打开动画效果
        modal.querySelector('.modal-content').style.animation = 'modal-glow 2s infinite alternate';
    });
    
    // 点击关闭按钮关闭弹窗
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 点击弹窗外部区域关闭弹窗
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
    // 复制功能
    const copyIcons = document.querySelectorAll('.contact-icon[data-copy]');
    const toast = document.getElementById('copy-toast');
    const copyMessage = document.getElementById('copy-message');
    
    copyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            const textType = this.querySelector('i').classList.contains('fa-envelope') ? '邮箱' : '电话';
            
            // 创建临时textarea元素用于复制
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';  // 防止滚动到页面底部
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                // 执行复制命令
                document.execCommand('copy');
                // 更新提示消息
                copyMessage.textContent = `${textType}已复制到剪贴板: ${textToCopy}`;
                // 显示提示
                toast.classList.add('show');
                
                // 2.5秒后隐藏提示
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2500);
            } catch (err) {
                console.error('复制失败:', err);
            }
            
            // 移除临时元素
            document.body.removeChild(textarea);
        });
    });
}); 