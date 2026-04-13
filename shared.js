function getNavHTML(activePage, basePath = '') {
    const pages = [
        { id: 'home', label: 'Главная', href: 'index.html', icon: 'home' },
        { id: 'stores', label: 'Магазины', href: 'stores.html', icon: 'storefront' },
        { id: 'services', label: 'Услуги', href: 'services.html', icon: 'design_services' },
        { id: 'pricing', label: 'Тарифы', href: 'pricing.html', icon: 'payments' },
        { id: 'contact', label: 'Контакты', href: 'contact.html', icon: 'support_agent' },
    ];

    const desktopLinks = pages.map(p => {
        const cls = p.id === activePage
            ? 'text-emerald-900 font-bold border-b-2 border-emerald-600 pb-0.5 text-sm transition-colors'
            : 'text-slate-600 hover:text-emerald-900 transition-colors font-medium text-sm';
        return `<a class="${cls} no-underline" href="${basePath}${p.href}">${p.label}</a>`;
    }).join('\n');

    const mobileLinks = pages.map(p => {
        const cls = p.id === activePage
            ? 'flex items-center gap-4 p-4 bg-emerald-50 text-emerald-900 rounded-xl font-semibold text-sm'
            : 'flex items-center gap-4 p-4 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors';
        return `<a href="${basePath}${p.href}" class="${cls} no-underline"><span class="material-symbols-outlined">${p.icon}</span> ${p.label}</a>`;
    }).join('\n');

    return `
    <nav class="fixed top-0 w-full z-50 shadow-sm" style="background:rgba(255,255,255,0.7);backdrop-filter:blur(20px)">
        <div class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
            <div class="flex items-center gap-8">
                <a href="${basePath}index.html" class="text-xl font-extrabold tracking-tight text-emerald-900 no-underline">Pago Fácil</a>
                <div class="hidden md:flex gap-6">${desktopLinks}</div>
            </div>
            <div class="flex items-center gap-4">
                <a href="https://app.gbtcfinance.es/login" class="text-emerald-900 font-medium text-sm hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all active:scale-95 no-underline">Login</a>
                <a href="https://app.gbtcfinance.es/register?r=63932174" class="bg-[#005946] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-sm hover:opacity-90 active:scale-95 transition-all hidden md:block no-underline">Get Started</a>
                <button class="md:hidden text-emerald-900" onclick="toggleMenu()"><span class="material-symbols-outlined text-2xl">menu</span></button>
            </div>
        </div>
    </nav>
    <div id="mobile-menu" class="fixed inset-0 z-[60] invisible opacity-0" style="transition:opacity .3s,visibility .3s">
        <div class="absolute inset-0 bg-black/40" onclick="toggleMenu()"></div>
        <div class="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl translate-x-full" id="menu-panel" style="transition:transform .3s ease">
            <div class="p-6 flex flex-col h-full">
                <div class="flex justify-between items-center mb-10">
                    <span class="text-xl font-bold text-emerald-900">Меню</span>
                    <button onclick="toggleMenu()" class="text-slate-500"><span class="material-symbols-outlined">close</span></button>
                </div>
                <nav class="flex flex-col gap-2 flex-grow">${mobileLinks}</nav>
                <a href="https://app.gbtcfinance.es/register?r=63932174" class="w-full bg-[#005946] text-white py-3 rounded-full font-bold text-sm mt-auto text-center no-underline block">Get Started</a>
            </div>
        </div>
    </div>`;
}

function getFooterHTML(basePath = '') {
    return `
    <footer class="w-full border-t border-slate-200 bg-slate-50">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start px-8 py-16 max-w-7xl mx-auto gap-12">
            <div class="lg:max-w-xs space-y-6">
                <a href="${basePath}index.html" class="text-2xl font-bold text-emerald-900 no-underline block">Pago Fácil</a>
                <p class="text-slate-500 text-sm leading-relaxed">Лицензированный европейский провайдер крипто-фиатных платежей. Ваша крипта — наш банковский счет.</p>
                <div class="flex gap-4">
                    <a class="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><span class="material-symbols-outlined">social_leaderboard</span></a>
                    <a class="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
                    <a class="text-slate-400 hover:text-emerald-600 transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
                </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
                <div class="space-y-4">
                    <h4 class="text-xs tracking-wide uppercase font-semibold text-emerald-900">Платформа</h4>
                    <ul class="space-y-2 list-none p-0 m-0">
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="${basePath}services.html">Услуги</a></li>
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="${basePath}pricing.html">Тарифы</a></li>
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="${basePath}stores.html">Магазины</a></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="text-xs tracking-wide uppercase font-semibold text-emerald-900">Юридическая информация</h4>
                    <ul class="space-y-2 list-none p-0 m-0">
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="#">Политика конфиденциальности</a></li>
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="#">Условия использования</a></li>
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="#">Настройки Cookie</a></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="text-xs tracking-wide uppercase font-semibold text-emerald-900">Поддержка</h4>
                    <ul class="space-y-2 list-none p-0 m-0">
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="${basePath}contact.html">Связаться с нами</a></li>
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="${basePath}contact.html">Центр помощи</a></li>
                        <li><a class="text-slate-500 hover:text-emerald-600 transition-colors text-xs font-semibold uppercase no-underline" href="${basePath}index.html#faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="px-8 py-8 border-t border-slate-200/50 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-[10px] text-slate-400 uppercase tracking-widest">
                GBTC FINANCE SL, Avenida Cerdanyola, 77 - 4ºD, Sant Cugat del Valles, 08172 - Barcelona, España | gbtc@gbtcfinance.com<br>
                Bank of Spain Crypto Registration License D663.
            </p>
            <p class="text-xs tracking-wide uppercase font-semibold text-slate-500 text-right">© 2026 Pago Fácil. Secure Kinetic Vault Technology.</p>
        </div>
    </footer>`;
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const panel = document.getElementById('menu-panel');
    if (menu.classList.contains('invisible')) {
        menu.classList.remove('invisible', 'opacity-0');
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.add('invisible', 'opacity-0');
        panel.classList.add('translate-x-full');
        panel.classList.remove('translate-x-0');
        document.body.style.overflow = '';
    }
}

function initPage(activePage, basePath = '') {
    document.getElementById('site-nav').innerHTML = getNavHTML(activePage, basePath);
    document.getElementById('site-footer').innerHTML = getFooterHTML(basePath);
}
