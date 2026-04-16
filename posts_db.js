// База данных постов блога Pago Fácil
const BLOG_POSTS = [
    {
        title: "Революция в B2B: Как USDC меняет международные платежи",
        date: "14 Апреля 2026",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000",
        link: "blog/b2b-usdc-benefits.html",
        category: "Крипто"
    },
    {
        title: "Криптоэквайринг для недвижимости в Испании",
        date: "12 Апреля 2026",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
        link: "blog/real-estate-crypto.html",
        category: "Бизнес"
    },
    {
        title: "Лицензия Банка Испании D663: Что это значит для Pago Fácil?",
        date: "10 Апреля 2026",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1000",
        link: "blog/bank-spain-license.html",
        category: "Новости"
    }
];

if (typeof window !== 'undefined') {
    window.BLOG_POSTS = BLOG_POSTS;
}
