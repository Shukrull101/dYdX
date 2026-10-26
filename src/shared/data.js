const lorem = 'Open-source tooling for the dYdX community: research, build, ship and maintain it with transparent milestones and public reporting.'
export const grantees = [
  { id: 'jane-cooper', name: 'Jane Cooper', color: '#6966FF', bio: 'Educator and trader building learning material for the dYdX ecosystem.', links: ['Twitter', 'Github', 'Website', 'Discord'] },
  { id: 'alex-ray', name: 'Alex Ray', color: '#18B87A', bio: 'Protocol engineer focused on SDKs and developer tooling.', links: ['Twitter', 'Github'] },
  { id: 'mia-chen', name: 'Mia Chen', color: '#E0508B', bio: 'Data analyst behind community dashboards.', links: ['Twitter', 'Website'] },
]
export const grants = [
  { id: 'youtube-education', cat: 'Education', title: 'Youtube dYdX Education Library', date: 'Mar 2023', amount: 5000, status: 'Completed', team: ['jane-cooper', 'alex-ray'], cover: true },
  { id: 'funding-rate-page', cat: 'Analytics', title: 'Funding rate page', date: 'Feb 2023', amount: 8000, status: 'In progress', team: ['mia-chen'] },
  { id: 'trading-cli', cat: 'Trading tools', title: 'Trading Strategy and Risk Tool', date: 'Jan 2023', amount: 12000, status: 'In progress', team: ['alex-ray', 'mia-chen'] },
  { id: 'rust-sdk', cat: 'Protocol & infrastructure', title: 'Rust SDK', date: 'Dec 2022', amount: 15000, status: 'Completed', team: ['alex-ray'] },
  { id: 'hook-inclusive', cat: 'Community', title: 'Hook for Inclusive Sponsorship', date: 'Nov 2022', amount: 3000, status: 'Completed', team: ['jane-cooper'] },
  { id: 'graph-subgraph', cat: 'Analytics', title: 'dydx.xyz + Subgraph', date: 'Oct 2022', amount: 9000, status: 'In progress', team: ['mia-chen', 'jane-cooper'] },
].map((g) => ({ ...g, text: lorem }))
export const rfps = ['Funding Rate Page', 'CLI Trading Tool', 'New Language SDKs', 'Liquidation Alert Tool', 'Governance Dashboard', 'Delegation Tool', 'Newsletter', 'Analytics Contributions', 'Discord bots', 'Reward tracking & Simulator']
  .map((title, i) => ({ title, status: ['Open', 'Open', 'In progress', 'Completed'][i % 4], text: lorem, meta: `Funding up to $${(i + 1) * 2}k` }))
export const expenses = Array.from({ length: 9 }, (_, i) => ({ title: i ? 'Expense title' : 'Funded Grant: Youtube Education', cat: ['Grants', 'Budget', 'Payouts', 'Operations'][i % 4], date: `Sep ${i + 1}, 2023`, amount: 1000 + i * 750 }))
export const posts = [
  { id: 'round-9', cat: 'Funding update', title: 'Round 9 of approvals', date: 'Jan 4, 2023', cover: true },
  { id: 'round-8', cat: 'Funding update', title: 'Round 8 of approvals', date: 'Dec 2, 2022', cover: true },
  { id: 'quarterly', cat: 'Report', title: 'Quarterly program report', date: 'Nov 9, 2022', cover: false },
  { id: 'meet-grantees', cat: 'Community', title: 'Meet the grantees', date: 'Oct 1, 2022', cover: false },
  { id: 'round-7', cat: 'Funding update', title: 'Round 7 of approvals', date: 'Sep 5, 2022', cover: true },
  { id: 'how-to', cat: 'Guide', title: 'How to write a strong proposal', date: 'Aug 2, 2022', cover: false },
]
export const faq = ['Who can apply?', 'Can I apply for a grant more than once?', 'How are grants selected?', 'How is the work reviewed?', 'Where is the application reviewed?', 'How much can I apply for?', 'How often are grants funded?']
  .map((q) => [q, 'Anyone in the community can apply. Proposals are reviewed by the grants committee against public criteria, and approved grants are paid out in milestones.'])
export const money = (n) => `$${n.toLocaleString('en-US')}`
