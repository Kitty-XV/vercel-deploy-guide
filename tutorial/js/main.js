/**
 * @description 移动菜单切换功能
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取菜单按钮和导航链接元素
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    // 添加点击事件监听
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // 获取所有导航链接
    const links = document.querySelectorAll('a[href^="#"]');
    
    // 为每个链接添加点击事件，实现平滑滚动
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是移动端菜单，点击后关闭菜单
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            // 获取目标元素的ID
            const targetId = this.getAttribute('href');
            
            // 如果是有效的ID选择器
            if (targetId !== '#') {
                e.preventDefault();
                
                // 获取目标元素
                const targetElement = document.querySelector(targetId);
                
                // 平滑滚动到目标位置
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // 减去导航栏高度
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 监听滚动事件，添加导航栏阴影
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
}); 