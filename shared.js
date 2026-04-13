// Shared navigation and footer for Pago Fácil website
function getNavHTML(activePage) {
    const pages = [
        { id: 'personal', label: 'Частным лицам', href: 'index.html', icon: 'person' },
        { id: 'business', label: 'Бизнесу', href: 'business.html', icon: 'business' },
        { id: 'coverage', label: 'Покрытие', href: 'coverage.html', icon: 'public' },
        { id: 'regulatory', label: 'Лицензия', href: 'regulatory.html', icon: 'gavel' },
    ];

    const desktopLinks = pages.map(p => {
        const cls = p.id === activePage
            ? 'text-[#0052FE] font-bold border-b-2 border-[#0052FE] pb-1 text-sm transition-all'
            : 'text-slate-600 hover:text-[#0052FE] transition-colors font-medium text-sm';
        return `<a class="${cls} no-underline" href="${p.href}">${p.label}</a>`;
    }).join('\n');

    const mobileLinks = pages.map(p => {
        const cls = p.id === activePage
            ? 'flex items-center gap-4 p-4 bg-blue-50 text-[#0052FE] rounded-xl font-semibold text-sm'
            : 'flex items-center gap-4 p-4 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors';
        return `<a href="${p.href}" class="${cls} no-underline"><span class="material-symbols-outlined">${p.icon}</span> ${p.label}</a>`;
    }).join('\n');

    return `
    <nav class="fixed top-0 w-full z-50 transition-all duration-300 glass-card border-b border-slate-200/50">
        <div class="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
            <div class="flex items-center gap-10">
                <a href="index.html" class="flex items-center gap-2 no-underline">
                    <div class="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center text-white font-black text-xl">P</div>
                    <span class="text-xl font-black tracking-tighter text-[#0A1628]">Pago Fácil</span>
                </a>
                <div class="hidden md:flex gap-8">${desktopLinks}</div>
            </div>
            <div class="flex items-center gap-4">
                <a href="https://my.pago-facil.com/" class="text-[#0A1628] font-bold text-sm hover:text-[#0052FE] transition-all no-underline">Войти</a>
                <a href="https://my.pago-facil.com/register" class="accent-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-premium hover:brightness-110 active:scale-95 transition-all no-underline hidden md:block">Создать аккаунт</a>
                <button class="md:hidden text-[#0A1628]" onclick="toggleMenu()"><span class="material-symbols-outlined text-2xl">menu</span></button>
            </div>
        </div>
    </nav>
    <div id="mobile-menu" class="fixed inset-0 z-[60] invisible opacity-0" style="transition:opacity .3s,visibility .3s">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="toggleMenu()"></div>
        <div class="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl translate-x-full" id="menu-panel" style="transition:transform .4s cubic-bezier(0.4, 0, 0.2, 1)">
            <div class="p-8 flex flex-col h-full">
                <div class="flex justify-between items-center mb-12">
                    <span class="text-2xl font-black text-[#0A1628]">Меню</span>
                    <button onclick="toggleMenu()" class="text-slate-400 p-2 hover:bg-slate-100 rounded-full transition-all"><span class="material-symbols-outlined">close</span></button>
                </div>
                <nav class="flex flex-col gap-3 flex-grow">${mobileLinks}</nav>
                <div class="pt-8 mt-auto border-t border-slate-100">
                    <a href="https://my.pago-facil.com/register" class="w-full accent-gradient text-white py-4 rounded-2xl font-bold text-base text-center no-underline block shadow-lg">Начать пользоваться</a>
                </div>
            </div>
        </div>
    </div>`;
}

function getFooterHTML() {
    return `
    <footer class="w-full bg-[#0A1628] text-white pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                <div class="space-y-6">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-black text-xl border border-white/20">P</div>
                        <span class="text-2xl font-black tracking-tighter">Pago Fácil</span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed max-w-xs">Лицензированный европейский провайдер крипто-фиатных платежей. Ваша крипта — их банковский счет. Быстро, легально, надежно.</p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">Платформа</h4>
                    <ul class="space-y-4 list-none p-0">
                        <li><a href="index.html" class="text-slate-400 hover:text-white transition-colors no-underline text-sm">Частным лицам</a></li>
                        <li><a href="business.html" class="text-slate-400 hover:text-white transition-colors no-underline text-sm">Для бизнеса</a></li>
                        <li><a href="coverage.html" class="text-slate-400 hover:text-white transition-colors no-underline text-sm">Зоны покрытия</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">Компания</h4>
                    <ul class="space-y-4 list-none p-0">
                        <li><a href="regulatory.html" class="text-slate-400 hover:text-white transition-colors no-underline text-sm">Регулирование</a></li>
                        <li><a href="contact.html" class="text-slate-400 hover:text-white transition-colors no-underline text-sm">Контакты</a></li>
                        <li><a href="https://pago-facil.com/mission/" class="text-slate-400 hover:text-white transition-colors no-underline text-sm">Миссия</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6">Юридическая информация</h4>
                    <p class="text-xs text-slate-500 mb-4 lh-relaxed">
                        Operated by Stratford Solutions, S.L.<br>
                        Bank of Spain license № D950.<br>
                        Sitges, Barcelona, Spain.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all no-underline"><span class="material-symbols-outlined text-sm">share</span></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all no-underline"><span class="material-symbols-outlined text-sm">alternate_email</span></a>
                    </div>
                </div>
            </div>
            <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-xs text-slate-500 tracking-wide uppercase">© 2026 Pago Fácil (Stratford Solutions), S.L. Все права защищены.</p>
                <div class="flex gap-6">
                    <a href="#" class="text-xs text-slate-500 hover:text-white transition-colors no-underline uppercase tracking-widest">Privacy</a>
                    <a href="#" class="text-xs text-slate-500 hover:text-white transition-colors no-underline uppercase tracking-widest">Terms</a>
                </div>
            </div>
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

function initPage(activePage) {
    document.getElementById('site-nav').innerHTML = getNavHTML(activePage);
    document.getElementById('site-footer').innerHTML = getFooterHTML();
}
