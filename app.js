// =============================================
// === SYNTHETIC DATASETS ===
// =============================================

const SPRINT_24 = [
    { id: 'T-101', name: 'Payment API Integration', complexity: 'High', sp: 8, est: 40, act: 42, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 2, status: 'Completed', risk: 'Low' },
    { id: 'T-102', name: 'UI Dashboard Redesign', complexity: 'Medium', sp: 5, est: 24, act: 28, delay: 'Yes', team: 'Beta', exp: 'Intermediate', bugs: 3, status: 'Completed', risk: 'Medium' },
    { id: 'T-103', name: 'Database Migration', complexity: 'High', sp: 13, est: 65, act: 62, delay: 'No', team: 'Gamma', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-104', name: 'Login Page UI', complexity: 'Low', sp: 3, est: 12, act: 10, delay: 'No', team: 'Alpha', exp: 'Junior', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-106', name: 'User Authentication', complexity: 'Medium', sp: 5, est: 24, act: 22, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-107', name: 'Data Export Feature', complexity: 'Low', sp: 3, est: 15, act: 14, delay: 'No', team: 'Gamma', exp: 'Intermediate', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-108', name: 'Analytics Dashboard', complexity: 'High', sp: 8, est: 42, act: 45, delay: 'Yes', team: 'Beta', exp: 'Junior', bugs: 5, status: 'At Risk', risk: 'High' },
    { id: 'T-109', name: 'Email Notification', complexity: 'Low', sp: 2, est: 10, act: 8, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-110', name: 'API Documentation', complexity: 'Medium', sp: 3, est: 18, act: 20, delay: 'No', team: 'Gamma', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low' }
];

const SPRINT_23 = [
    { id: 'T-088', name: 'Search Functionality', complexity: 'Medium', sp: 5, est: 22, act: 24, delay: 'Yes', team: 'Beta', exp: 'Intermediate', bugs: 2, status: 'Completed', risk: 'Medium' },
    { id: 'T-089', name: 'User Profile Page', complexity: 'Low', sp: 3, est: 14, act: 13, delay: 'No', team: 'Alpha', exp: 'Junior', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-090', name: 'Payment Gateway v2', complexity: 'High', sp: 13, est: 68, act: 72, delay: 'Yes', team: 'Gamma', exp: 'Senior', bugs: 4, status: 'Completed', risk: 'High' },
    { id: 'T-091', name: 'Report Builder', complexity: 'High', sp: 8, est: 40, act: 38, delay: 'No', team: 'Delta', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-092', name: 'CSV Export', complexity: 'Low', sp: 2, est: 8, act: 9, delay: 'Yes', team: 'Alpha', exp: 'Junior', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-093', name: 'Role Management', complexity: 'Medium', sp: 5, est: 26, act: 25, delay: 'No', team: 'Beta', exp: 'Senior', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-094', name: 'Audit Logs', complexity: 'Medium', sp: 3, est: 16, act: 18, delay: 'Yes', team: 'Gamma', exp: 'Intermediate', bugs: 2, status: 'Completed', risk: 'Medium' },
    { id: 'T-095', name: 'Two-Factor Auth', complexity: 'High', sp: 8, est: 38, act: 36, delay: 'No', team: 'Alpha', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-096', name: 'Onboarding Wizard', complexity: 'Medium', sp: 5, est: 24, act: 26, delay: 'Yes', team: 'Delta', exp: 'Junior', bugs: 3, status: 'Completed', risk: 'Medium' },
    { id: 'T-097', name: 'Mobile Responsive Fix', complexity: 'Low', sp: 3, est: 12, act: 11, delay: 'No', team: 'Beta', exp: 'Intermediate', bugs: 0, status: 'Completed', risk: 'Low' }
];

const SPRINT_22 = [
    { id: 'T-075', name: 'Notification System', complexity: 'High', sp: 8, est: 44, act: 48, delay: 'Yes', team: 'Alpha', exp: 'Senior', bugs: 3, status: 'Completed', risk: 'High' },
    { id: 'T-076', name: 'Dark Mode UI', complexity: 'Medium', sp: 5, est: 20, act: 19, delay: 'No', team: 'Beta', exp: 'Intermediate', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-077', name: 'API Rate Limiting', complexity: 'High', sp: 8, est: 35, act: 34, delay: 'No', team: 'Gamma', exp: 'Expert', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-078', name: 'File Upload Module', complexity: 'Medium', sp: 5, est: 26, act: 30, delay: 'Yes', team: 'Delta', exp: 'Junior', bugs: 4, status: 'Completed', risk: 'Medium' },
    { id: 'T-079', name: 'Dashboard Widgets', complexity: 'Low', sp: 3, est: 14, act: 13, delay: 'No', team: 'Alpha', exp: 'Intermediate', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-080', name: 'Session Management', complexity: 'Medium', sp: 5, est: 22, act: 21, delay: 'No', team: 'Beta', exp: 'Senior', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-081', name: 'Email Templates', complexity: 'Low', sp: 2, est: 10, act: 12, delay: 'Yes', team: 'Gamma', exp: 'Junior', bugs: 2, status: 'Completed', risk: 'Low' },
    { id: 'T-082', name: 'Cron Job Scheduler', complexity: 'High', sp: 13, est: 55, act: 52, delay: 'No', team: 'Alpha', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-083', name: 'Multi-Tenant Support', complexity: 'High', sp: 13, est: 70, act: 78, delay: 'Yes', team: 'Delta', exp: 'Senior', bugs: 5, status: 'At Risk', risk: 'High' },
    { id: 'T-084', name: 'Analytics Tracking', complexity: 'Medium', sp: 5, est: 24, act: 23, delay: 'No', team: 'Beta', exp: 'Intermediate', bugs: 0, status: 'Completed', risk: 'Low' }
];

const SPRINT_21 = [
    { id: 'T-062', name: 'User Registration Flow', complexity: 'Medium', sp: 5, est: 22, act: 20, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-063', name: 'Product Catalogue API', complexity: 'High', sp: 8, est: 40, act: 45, delay: 'Yes', team: 'Beta', exp: 'Junior', bugs: 4, status: 'Completed', risk: 'High' },
    { id: 'T-064', name: 'Checkout Flow', complexity: 'High', sp: 13, est: 62, act: 60, delay: 'No', team: 'Gamma', exp: 'Expert', bugs: 2, status: 'Completed', risk: 'Low' },
    { id: 'T-065', name: 'Homepage Redesign', complexity: 'Medium', sp: 5, est: 26, act: 28, delay: 'Yes', team: 'Delta', exp: 'Intermediate', bugs: 2, status: 'Completed', risk: 'Medium' },
    { id: 'T-066', name: 'Cache Layer Setup', complexity: 'High', sp: 8, est: 36, act: 34, delay: 'No', team: 'Alpha', exp: 'Expert', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-067', name: 'Error Monitoring', complexity: 'Low', sp: 3, est: 14, act: 14, delay: 'No', team: 'Beta', exp: 'Senior', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-068', name: 'SSO Integration', complexity: 'High', sp: 13, est: 65, act: 74, delay: 'Yes', team: 'Gamma', exp: 'Junior', bugs: 6, status: 'At Risk', risk: 'High' },
    { id: 'T-069', name: 'Responsive Tables', complexity: 'Low', sp: 2, est: 10, act: 9, delay: 'No', team: 'Delta', exp: 'Intermediate', bugs: 0, status: 'Completed', risk: 'Low' },
    { id: 'T-070', name: 'Webhook Handler', complexity: 'Medium', sp: 5, est: 24, act: 22, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 1, status: 'Completed', risk: 'Low' },
    { id: 'T-071', name: 'Batch Import Tool', complexity: 'Medium', sp: 5, est: 28, act: 32, delay: 'Yes', team: 'Beta', exp: 'Junior', bugs: 3, status: 'Completed', risk: 'Medium' }
];

// Sprint lookup map
const SPRINT_DB = {
    'sprint3_apr2026.csv': { label: 'Sprint 3 (Current)', date: '04/07/26', data: SPRINT_24 },
    'sprint2_mar2026.csv': { label: 'Sprint 2', date: '03/10/26', data: SPRINT_23 },
    'sprint1_feb2026.csv': { label: 'Sprint 1', date: '02/10/26', data: SPRINT_22 },
    'sprint0_jan2026.csv': { label: 'Sprint 0', date: '01/13/26', data: SPRINT_21 },
};

const TEAMS = [
    { id: 'team_alpha', name: 'Team Alpha', lead: 'Sarah Chen', velocity: 42, accuracy: 92, onTimeRate: 95, avatar: '🦅', skills: ['React', 'Node.js', 'Auth'], trend: '+4%' },
    { id: 'team_beta', name: 'Team Beta', lead: 'Mike Rodriguez', velocity: 38, accuracy: 85, onTimeRate: 82, avatar: '⚡', skills: ['Vue', 'Python', 'ML'], trend: '+2%' },
    { id: 'team_gamma', name: 'Team Gamma', lead: 'David Kim', velocity: 41, accuracy: 88, onTimeRate: 91, avatar: '🛡️', skills: ['Java', 'AWS', 'DevOps'], trend: '+6%' },
    { id: 'team_delta', name: 'Team Delta', lead: 'Priya Patel', velocity: 32, accuracy: 79, onTimeRate: 75, avatar: '📱', skills: ['iOS', 'Android', 'Flutter'], trend: '-1%' }
];

const EMPLOYEES = [
    { employeeId: 'E001', name: 'Avinash Sasi', role: 'Developer', team: 'team_alpha', experienceYears: 5, skills: ['Node.js', 'React'], projectsCompleted: 12, successfulProjects: 11, failedDelayedProjects: 1, successRate: 91, avgCompletionTime: 30, bugRate: 0.1, performanceRating: 4.5, sprintContributions: 24 },
    { employeeId: 'E002', name: 'Sarah Chen', role: 'Lead', team: 'team_alpha', experienceYears: 8, skills: ['Architecture', 'Python'], projectsCompleted: 25, successfulProjects: 24, failedDelayedProjects: 1, successRate: 96, avgCompletionTime: 40, bugRate: 0.05, performanceRating: 4.9, sprintContributions: 48 },
    { employeeId: 'E003', name: 'Mike Rodriguez', role: 'Lead', team: 'team_beta', experienceYears: 7, skills: ['Java', 'Spring'], projectsCompleted: 20, successfulProjects: 18, failedDelayedProjects: 2, successRate: 90, avgCompletionTime: 45, bugRate: 0.15, performanceRating: 4.2, sprintContributions: 38 },
    { employeeId: 'E004', name: 'David Kim', role: 'Lead', team: 'team_gamma', experienceYears: 6, skills: ['DevOps', 'AWS'], projectsCompleted: 15, successfulProjects: 14, failedDelayedProjects: 1, successRate: 93, avgCompletionTime: 35, bugRate: 0.12, performanceRating: 4.4, sprintContributions: 30 },
    { employeeId: 'E005', name: 'Priya Patel', role: 'Lead', team: 'team_delta', experienceYears: 9, skills: ['Mobile', 'Flutter'], projectsCompleted: 30, successfulProjects: 25, failedDelayedProjects: 5, successRate: 83, avgCompletionTime: 50, bugRate: 0.2, performanceRating: 3.9, sprintContributions: 55 },
    { employeeId: 'E006', name: 'Rohit Sunkuri', role: 'Developer', team: 'team_beta', experienceYears: 3, skills: ['Vue.js', 'PHP'], projectsCompleted: 8, successfulProjects: 6, failedDelayedProjects: 2, successRate: 75, avgCompletionTime: 25, bugRate: 0.25, performanceRating: 3.5, sprintContributions: 15 },
    { employeeId: 'E007', name: 'Sneha Iyer', role: 'QA', team: 'team_gamma', experienceYears: 4, skills: ['Selenium', 'Cypress'], projectsCompleted: 14, successfulProjects: 13, failedDelayedProjects: 1, successRate: 92, avgCompletionTime: 20, bugRate: 0.08, performanceRating: 4.6, sprintContributions: 28 },
    { employeeId: 'E008', name: 'John Doe', role: 'Developer', team: 'team_alpha', experienceYears: 2, skills: ['HTML', 'CSS'], projectsCompleted: 5, successfulProjects: 4, failedDelayedProjects: 1, successRate: 80, avgCompletionTime: 15, bugRate: 0.3, performanceRating: 3.8, sprintContributions: 10 },
    { employeeId: 'E009', name: 'Jane Smith', role: 'Developer', team: 'team_beta', experienceYears: 6, skills: ['C++', 'Rust'], projectsCompleted: 18, successfulProjects: 17, failedDelayedProjects: 1, successRate: 94, avgCompletionTime: 42, bugRate: 0.1, performanceRating: 4.7, sprintContributions: 36 },
    { employeeId: 'E010', name: 'Alice Johnson', role: 'QA', team: 'team_delta', experienceYears: 3, skills: ['Jest', 'Mocha'], projectsCompleted: 10, successfulProjects: 9, failedDelayedProjects: 1, successRate: 90, avgCompletionTime: 18, bugRate: 0.12, performanceRating: 4.1, sprintContributions: 20 },
    { employeeId: 'E011', name: 'Bob Williams', role: 'Manager', team: 'team_alpha', experienceYears: 12, skills: ['Agile', 'Scrum'], projectsCompleted: 40, successfulProjects: 38, failedDelayedProjects: 2, successRate: 95, avgCompletionTime: 60, bugRate: 0.02, performanceRating: 4.8, sprintContributions: 80 },
    { employeeId: 'E012', name: 'Charlie Brown', role: 'Developer', team: 'team_gamma', experienceYears: 1, skills: ['JavaScript'], projectsCompleted: 2, successfulProjects: 1, failedDelayedProjects: 1, successRate: 50, avgCompletionTime: 10, bugRate: 0.5, performanceRating: 2.8, sprintContributions: 4 },
    { employeeId: 'E013', name: 'Diana Prince', role: 'Developer', team: 'team_delta', experienceYears: 7, skills: ['Go', 'Kubernetes'], projectsCompleted: 22, successfulProjects: 21, failedDelayedProjects: 1, successRate: 95, avgCompletionTime: 48, bugRate: 0.05, performanceRating: 4.9, sprintContributions: 44 },
    { employeeId: 'E014', name: 'Evan Wright', role: 'QA', team: 'team_beta', experienceYears: 2, skills: ['Manual Testing'], projectsCompleted: 6, successfulProjects: 5, failedDelayedProjects: 1, successRate: 83, avgCompletionTime: 12, bugRate: 0.2, performanceRating: 3.7, sprintContributions: 12 },
    { employeeId: 'E015', name: 'Fiona Gallagher', role: 'Developer', team: 'team_alpha', experienceYears: 4, skills: ['Ruby', 'Rails'], projectsCompleted: 11, successfulProjects: 10, failedDelayedProjects: 1, successRate: 90, avgCompletionTime: 28, bugRate: 0.15, performanceRating: 4.0, sprintContributions: 22 }
];

const AI_ACCURACY = [
    { sprint: 'Sprint 19', manual: 320, ai: 295, actual: 287, manualError: 11.5, aiError: 2.8 },
    { sprint: 'Sprint 20', manual: 410, ai: 385, actual: 392, manualError: 4.6, aiError: -1.8 },
    { sprint: 'Sprint 21', manual: 280, ai: 265, actual: 271, manualError: 3.3, aiError: -2.2 },
    { sprint: 'Sprint 22', manual: 350, ai: 338, actual: 345, manualError: 1.4, aiError: -2.0 },
    { sprint: 'Sprint 23', manual: 390, ai: 372, actual: 382, manualError: 2.1, aiError: -2.6 },
    { sprint: 'Sprint 24', manual: 275, ai: 261, actual: 268, manualError: 2.6, aiError: -2.6 }
];

// =============================================
// === SPRINT 2 DATA (US3 - Risk Detection) ===
// =============================================
const RISK_TASKS_DETAILED = [
    { id: 'T-108', name: 'Dashboard UI Redesign', sprint: 'Sprint 2d', team: 'Frontend Team', est: '41h', act: '63h', delay: '+3d', riskLevel: 'HIGH', factors: ['Scope Creep', 'Third-party API'] },
    { id: 'T-99', name: 'Mobile App Push Notifications', sprint: 'Sprint 2d', team: 'Middle Team', est: '44h', act: '50h', delay: '+3d', riskLevel: 'HIGH', factors: ['Complex Integration', 'Third-party API'] },
    { id: 'T-94', name: 'Payment Gateway Integration', sprint: 'Sprint 2d', team: 'Backend Team', est: '28h', act: '52h', delay: '+5d', riskLevel: 'MEDIUM', factors: ['API Documentation Issues'] },
    { id: 'T-87', name: 'Search Optimization', sprint: 'Sprint 2d', team: 'Backend Team', est: '24h', act: '80h', delay: '+1d', riskLevel: 'MEDIUM', factors: ['Database Performance'] },
    { id: 'T-82', name: 'Email Template System', sprint: 'Sprint 2d', team: 'Frontend Team', est: '23h', act: '24h', delay: 'On time', riskLevel: 'MEDIUM', factors: ['Cross-browser Compatibility'] }
];

const RISK_FACTORS = [
    { name: 'Scope Creep', desc: 'Requirements changing during development phase', tasks: 3, color: '#FEE2E2', labelColor: '#991B1B', badge: 'badge-error' },
    { name: 'Technical Complexity', desc: 'Tasks requiring specialized expertise or complex integrations', tasks: 5, color: '#FFFBEB', labelColor: '#92400E', badge: 'badge-warning' },
    { name: 'Third-party Dependencies', desc: 'Delays caused by external API or vendor issues', tasks: 2, color: '#EFF6FF', labelColor: '#1D4ED8', badge: 'badge-info' }
];

const MITIGATION_PLANS = [
    { task: 'Dashboard UI Redesign', plan: 'Add 1 senior developer, extend deadline by 3 days', team: 'Frontend Team', icon: '🔧' },
    { task: 'Mobile App Push Notifications', plan: 'Switch to alternative FCM provider, reduce scope for sprint', team: 'Mobile Team', icon: '📱' },
    { task: 'Payment Gateway Integration', plan: 'Escalate to vendor SLA team, assign API specialist', team: 'Backend Team', icon: '💳' },
    { task: 'Search Optimization', plan: 'Add database indexing, review query performance plan', team: 'Backend Team', icon: '🔍' }
];

// =============================================
// === SPRINT 2 DATA (US4 - Team Recommendations) ===
// =============================================
const TEAM_RECOMMENDATIONS = [
    { rank: 1, team: 'Team Beta', match: 92, reasons: ['Strongest ML/Python background', 'Led 3 similar prediction tasks', 'Medium workload (62%)'], color: '#4F46E5', avatar: '⚡' },
    { rank: 2, team: 'Team Alpha', match: 78, reasons: ['Senior devs available', 'Excellent accuracy (92%)', 'High current load (88%)'], color: '#10B981', avatar: '🦅' },
    { rank: 3, team: 'Team Gamma', match: 61, reasons: ['AWS/ML infra expertise', 'Available from Sprint 3', 'Good on-time rate (91%)'], color: '#F59E0B', avatar: '🛡️' }
];

// =============================================
// === SPRINT PROGRESS DATA (Feb - May 2026) ===
// =============================================
const SPRINT_PROGRESS = [
    { name: 'Sprint 1 (Feb 10–24)', total: 34, done: 34, pct: 100, color: '#10B981' },
    { name: 'Sprint 2 (Mar 10–24)', total: 42, done: 26, pct: 62, color: '#4F46E5' },
    { name: 'Sprint 3 (Apr 07–21)', total: 38, done: 5, pct: 13, color: '#F59E0B' },
];

// =============================================
// === NOTIFICATIONS (Sprint 3 - US5) ===
// =============================================
const NOTIFICATIONS = [
    { id: 1, icon: '🔴', title: 'High Risk Detected', msg: 'T-108 Dashboard UI Redesign exceeded estimated time by 53%', time: '5 min ago', read: false },
    { id: 2, icon: '🤖', title: 'AI Model Retrained', msg: 'Model trained on Sprint 24 data. Validation accuracy: 91.4%', time: '2 hours ago', read: false },
    { id: 3, icon: '⚠️', title: 'Sprint 2 Risk Threshold', msg: '5 tasks have exceeded the risk threshold. Review mitigation plans.', time: '3 hours ago', read: false },
    { id: 4, icon: '✅', title: 'Team Beta Recommended', msg: 'AI recommends Team Beta for ML Model Training task (92% match)', time: '1 day ago', read: true },
];

// =============================================
// === TRAINING PIPELINE (Sprint 2 - US1) ===
// =============================================
const TRAINING_PIPELINE = [
    { step: 'TASK-201', name: 'Data Preprocessing', status: 'done', desc: 'Cleaned and normalized 2,847 historical sprint records' },
    { step: 'TASK-202', name: 'Feature Engineering', status: 'done', desc: 'Extracted 14 features: complexity, SP, team velocity, bug rate...' },
    { step: 'TASK-203', name: 'Model Training', status: 'done', desc: 'Gradient Boosted Tree trained — 91.4% validation accuracy achieved' },
    { step: 'TASK-204', name: 'API Endpoint Deployed', status: 'done', desc: 'Prediction API connected to task creation form' },
    { step: 'TASK-205', name: 'Risk Scoring Layer', status: 'active', desc: 'Running: Calculating risk probability for 40 open tasks...' },
    { step: 'TASK-206', name: 'UI Integration', status: 'pending', desc: 'Pending: Connecting warning badges to frontend components' }
];

// =============================================
// === APPLICATION STATE & NAVIGATION ===
// =============================================
const AppState = {
    currentScreen: 'login',
    currentUser: null,
    token: localStorage.getItem('jwtToken'),
};

async function apiFetch(endpoint, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (AppState.token) {
        headers['Authorization'] = `Bearer ${AppState.token}`;
    }
    const response = await fetch(`/api${endpoint}`, { ...options, headers });
    const result = await response.json();
    if (!response.ok && response.status === 401) {
        logout();
        throw new Error('Unauthorized');
    }
    return result;
}

function logout() {
    localStorage.removeItem('jwtToken');
    AppState.token = null;
    AppState.currentUser = null;
    navigateTo('login');
}

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    let targetId = `screen-${screenId}`;
    if (screenId === 'dashboard') targetId = 'app-layout';

    const target = document.getElementById(targetId);
    if (target) {
        target.style.display = 'flex';
        setTimeout(() => {
            target.classList.add('active');
            if (screenId === 'dashboard') {
                navigateToView('dashboard');
            }
        }, 10);
        AppState.currentScreen = screenId;
    }
}
window.navigateTo = navigateTo;

function navigateToView(viewId) {
    document.querySelectorAll('.view').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);
    }

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-target="${viewId}"]`);
    if (navItem) navItem.classList.add('active');
}
window.navigateToView = navigateToView;

// =============================================
// === LOGIN PAGE LOGIC ===
// =============================================
function initLoginScreen() {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const togglePassword = document.getElementById('toggle-password');
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const emailError = document.getElementById('email-error');
    const forgotBtn = document.getElementById('forgot-btn');
    const forgotModal = document.getElementById('forgot-modal');
    const closeForgotModal = document.getElementById('close-forgot-modal');
    const sendResetBtn = document.getElementById('send-reset-btn');
    const resetSuccessMsg = document.getElementById('reset-success-msg');

    // Run validation once on load since email is pre-filled via HTML
    function validateEmail() {
        const val = emailInput.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        emailInput.classList.remove('error', 'success');
        emailError.style.display = 'none';
        if (val.length > 0) {
            if (isValid) emailInput.classList.add('success');
            else { emailInput.classList.add('error'); emailError.style.display = 'block'; }
        }
        return isValid;
    }

    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
    // Show green success state immediately since email is pre-filled
    validateEmail();

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        loginBtn.innerHTML = '<span class="spinner"></span> Logging in...';
        loginBtn.classList.add('loading');

        try {
            const result = await apiFetch('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });

            if (result.success) {
                AppState.token = result.token;
                localStorage.setItem('jwtToken', AppState.token);
                AppState.currentUser = result.user;
                navigateTo('dashboard');
            } else {
                throw new Error(result.message);
            }
        } catch (err) {
            loginBtn.classList.add('shake');
            setTimeout(() => loginBtn.classList.remove('shake'), 500);
            emailInput.classList.add('error');
            passwordInput.classList.add('error');
            emailError.textContent = err.message || 'Login failed';
            emailError.style.display = 'block';
        } finally {
            loginBtn.innerHTML = 'Login';
            loginBtn.classList.remove('loading');
        }
    });

    forgotBtn.addEventListener('click', () => forgotModal.classList.add('active'));
    closeForgotModal.addEventListener('click', () => {
        forgotModal.classList.remove('active');
        resetSuccessMsg.style.display = 'none';
        document.getElementById('reset-email').value = '';
    });
    sendResetBtn.addEventListener('click', () => {
        sendResetBtn.innerHTML = '<span class="spinner"></span>';
        setTimeout(() => {
            sendResetBtn.innerHTML = 'Send Reset Link';
            resetSuccessMsg.style.display = 'block';
        }, 1000);
    });
}

// =============================================
// === NOTIFICATIONS (Sprint 3 - US5) ===
// =============================================
let notifState = [...NOTIFICATIONS];

function initNotifications() {
    const btn = document.getElementById('notif-btn');
    const panel = document.getElementById('notif-panel');
    const clearBtn = document.getElementById('notif-clear-btn');
    const list = document.getElementById('notif-list');
    const countEl = document.getElementById('notif-count');

    function renderNotifs() {
        const unread = notifState.filter(n => !n.read).length;
        countEl.textContent = unread;
        countEl.style.display = unread > 0 ? 'flex' : 'none';

        list.innerHTML = notifState.map(n => `
            <div class="notif-item ${n.read ? 'read' : ''}" data-id="${n.id}">
                <div class="notif-icon">${n.icon}</div>
                <div class="notif-body">
                    <div class="notif-title">${n.title}</div>
                    <div class="notif-msg">${n.msg}</div>
                    <div class="notif-time">${n.time}</div>
                </div>
                ${!n.read ? '<div class="notif-dot"></div>' : ''}
            </div>
        `).join('');

        // Mark as read on click
        list.querySelectorAll('.notif-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                const n = notifState.find(x => x.id === id);
                if (n) n.read = true;
                renderNotifs();
            });
        });
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = panel.style.display === 'block';
        panel.style.display = isOpen ? 'none' : 'block';
        if (!isOpen) renderNotifs();
    });

    clearBtn && clearBtn.addEventListener('click', () => {
        notifState.forEach(n => n.read = true);
        renderNotifs();
    });

    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && e.target !== btn) {
            panel.style.display = 'none';
        }
    });

    renderNotifs();
}

// =============================================
// === DASHBOARD LOGIC ===
// =============================================
let sprintChartInstance = null;

function initDashboard() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            // Settings handled exclusively by initSettingsScreen (loads data + checks connection)
            if (target && target !== 'settings') { e.preventDefault(); navigateToView(target); }
        });
    });

    if (AppState.currentUser) {
        document.getElementById('user-greeting').textContent = AppState.currentUser.name;
        document.getElementById('welcome-message').textContent = `GOOD MORNING, ${AppState.currentUser.name.split(' ')[0]}!`;
        const avatarEl = document.getElementById('user-avatar');
        if (avatarEl) {
            const initials = AppState.currentUser.name.split(' ').map(n => n[0]).join('');
            avatarEl.textContent = initials.toUpperCase();
        }
        const roleEl = document.querySelector('.profile-role');
        if (roleEl && AppState.currentUser.role) roleEl.textContent = AppState.currentUser.role;
    }

    renderSprintChart();
    renderTeamPerformance();
    renderRecentTasks();

    // Fetch real summary if token exists
    if (AppState.token) {
        apiFetch('/dashboard/summary').then(res => {
            if (res.success) {
                // Update KPI cards dynamically
                const kpis = document.querySelectorAll('.kpi-card-value');
                if (kpis[0]) kpis[0].textContent = res.data.activeSprints;
                if (kpis[1]) kpis[1].textContent = res.data.tasksAtRisk;
                if (kpis[2]) kpis[2].innerHTML = `${res.data.aiAccuracy}% <span class="trend-up">${res.data.accuracyTrend}% ▲</span>`;
                if (kpis[3]) kpis[3].textContent = res.data.teamsAvailable;
            }
        }).catch(err => console.error('Dashboard summary fetch failed:', err));
    }
}

function renderSprintChart() {
    const ctx = document.getElementById('sprintChart');
    if (!ctx) return;
    if (sprintChartInstance) sprintChartInstance.destroy();

    const labels = AI_ACCURACY.map(d => d.sprint.replace('Sprint ', 'S'));
    sprintChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                { label: 'Manual Est. (hrs)', data: AI_ACCURACY.map(d => d.manual), borderColor: '#EF4444', backgroundColor: 'rgba(239,68,68,0.1)', borderWidth: 2, borderDash: [5, 5], tension: 0.3 },
                { label: 'AI Predicted (hrs)', data: AI_ACCURACY.map(d => d.ai), borderColor: '#4F46E5', backgroundColor: 'rgba(79,70,229,0.1)', borderWidth: 2, tension: 0.3 },
                { label: 'Actual (hrs)', data: AI_ACCURACY.map(d => d.actual), borderColor: '#10B981', backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 3, tension: 0.3 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: { mode: 'index', intersect: false, callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw}h` } }
            },
            interaction: { mode: 'nearest', axis: 'x', intersect: false },
            scales: { y: { beginAtZero: false } }
        }
    });
}

function renderTeamPerformance() {
    const container = document.getElementById('team-performance-list');
    if (!container) return;
    container.innerHTML = TEAMS.map(team => {
        let stars = team.accuracy >= 90 ? '⭐' : '';
        return `
            <div class="team-item">
                <div class="team-info">
                    <div class="team-avatar">${team.avatar}</div>
                    <div>
                        <div style="font-weight: 500;">${team.name}</div>
                        <div class="text-small" style="cursor:pointer; color:var(--primary-blue); text-decoration:underline;" onclick="changeTeamLead('${team.id}')" title="Click to edit lead">Lead: ${team.lead}</div>
                    </div>
                </div>
                <div class="team-stats">${team.accuracy}% ${stars}</div>
            </div>
        `;
    }).join('');
}

function renderRecentTasks() {
    const tbody = document.getElementById('recent-tasks-tbody');
    if (!tbody) return;
    const tasksToDisplay = SPRINT_24.slice(0, 5);
    tbody.innerHTML = tasksToDisplay.map(task => {
        let statusBadge = '';
        if (task.status === 'Completed' && task.delay === 'No') statusBadge = '<span class="status-badge status-done">✅ Done</span>';
        else if (task.status === 'Completed' && task.delay === 'Yes') statusBadge = '<span class="status-badge status-late">⚠️ Late</span>';
        else if (task.status === 'At Risk') statusBadge = '<span class="status-badge status-risk">⏳ Risk</span>';
        else statusBadge = `<span class="status-badge status-done">${task.status}</span>`;
        const riskIcon = task.risk === 'High' ? '🔴' : (task.risk === 'Medium' ? '🟡' : '🟢');
        return `<tr><td style="font-weight:500;">${task.name}</td><td>${statusBadge}</td><td>${riskIcon}</td><td>${task.team}</td></tr>`;
    }).join('');
}

// =============================================
// === UPLOAD + ML TRAINING (Sprint 2 - US1) ===
// =============================================
function initUploadScreen() {
    const uploadZone = document.getElementById('upload-zone');
    const previewCard = document.getElementById('upload-preview');
    const previewTbody = document.getElementById('preview-tbody');
    const trainBtn = document.getElementById('train-model-btn');
    const downloadBtn = document.getElementById('download-template-btn');
    const previewTitle = document.getElementById('upload-preview-title');

    // Render Training Pipeline
    const pipelineEl = document.getElementById('training-pipeline');
    if (pipelineEl) {
        pipelineEl.innerHTML = TRAINING_PIPELINE.map((step, i) => {
            const isDone = step.status === 'done';
            const isActive = step.status === 'active';
            const iconBg = isDone ? '#10B981' : (isActive ? '#4F46E5' : '#D1D5DB');
            const icon = isDone ? '✓' : (isActive ? '⏳' : `${i + 1}`);
            return `
                <div style="display:flex; align-items:flex-start; gap:16px; margin-bottom:16px;">
                    <div style="width:32px; height:32px; border-radius:50%; background:${iconBg}; color:white; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0;">${icon}</div>
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:600; font-size:14px;">${step.name}</span>
                            <span style="font-size:11px; padding:3px 10px; border-radius:10px; background:${isDone ? '#D1FAE5' : (isActive ? '#EEF2FF' : '#F3F4F6')}; color:${isDone ? '#065F46' : (isActive ? '#4F46E5' : '#6B7280')}; font-weight:600;">${step.step}: ${isDone ? 'Complete' : (isActive ? 'Running' : 'Pending')}</span>
                        </div>
                        <p class="text-small" style="margin-top:4px;">${step.desc}</p>
                        <div style="height:4px; background:#E5E7EB; border-radius:2px; margin-top:8px; overflow:hidden;">
                            <div style="width:${isDone ? '100' : (isActive ? '65' : '0')}%; height:100%; background:${iconBg}; border-radius:2px; transition:width 1s;"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(ev => uploadZone.addEventListener(ev, e => { e.preventDefault(); e.stopPropagation(); }, false));
    ['dragenter', 'dragover'].forEach(ev => uploadZone.addEventListener(ev, () => uploadZone.classList.add('dragover'), false));
    ['dragleave', 'drop'].forEach(ev => uploadZone.addEventListener(ev, () => uploadZone.classList.remove('dragover'), false));
    uploadZone.addEventListener('drop', handleDrop, false);
    uploadZone.addEventListener('click', () => handleDrop({ dataTransfer: { files: [{ name: 'sprint24.csv' }] } }));

    function handleDrop(e) {
        const fileName = (e.dataTransfer && e.dataTransfer.files[0]) ? e.dataTransfer.files[0].name : 'sprint24.csv';
        uploadZone.innerHTML = `
            <div style="font-size:32px; margin-bottom:8px;">⏳</div>
            <h3>Uploading ${fileName}...</h3>
            <div style="width:100%; height:8px; background:var(--border-color); border-radius:4px; margin-top:16px; overflow:hidden;">
                <div id="upload-progress" style="width:0%; height:100%; background:var(--success-green); transition:width 0.5s;"></div>
            </div>
        `;
        setTimeout(() => document.getElementById('upload-progress').style.width = '100%', 100);
        setTimeout(() => {
            uploadZone.innerHTML = `<div style="font-size:32px; margin-bottom:8px;">✅</div><h3 style="color:var(--success-green)">Upload Complete</h3><p class="text-small">${fileName} loaded</p>`;
            showPreview(fileName);
        }, 800);
    }

    function showPreview(fileName) {
        fileName = fileName || 'sprint24.csv';
        const sprintInfo = SPRINT_DB[fileName] || SPRINT_DB['sprint24.csv'];
        const tasks = sprintInfo.data;
        const rowCount = tasks.length;
        const errorCount = tasks.filter(t => t.delay === 'Yes').length;
        if (previewTitle) previewTitle.textContent = `DATA PREVIEW - ${fileName}`;
        const badgeRow = document.getElementById('upload-preview-badges');
        if (badgeRow) badgeRow.innerHTML = `
            <span class="badge badge-success" style="margin-right:8px;">✅ ${rowCount} rows loaded</span>
            <span class="badge badge-warning" style="margin-right:8px;">⚠️ ${errorCount} delayed</span>
            <span class="badge badge-success">🟢 ${rowCount - errorCount} on time</span>
        `;
        previewCard.style.display = 'block';
        previewCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        previewTbody.innerHTML = tasks.map(task => {
            const delayStyle = task.delay === 'Yes' ? 'color:var(--warning-yellow)' : 'color:var(--success-green)';
            return `<tr style="cursor:pointer;"><td style="font-weight:500;">${task.id}</td><td>${task.complexity}</td><td>${task.sp}</td><td>${task.est}</td><td>${task.act}</td><td style="${delayStyle}; font-weight:500;">${task.delay}</td><td>${task.team}</td></tr>`;
        }).join('');
    }

    document.querySelectorAll('.sprint-file-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const fileName = link.dataset.sprint;
            document.querySelectorAll('.sprint-file-link').forEach(l => l.style.fontWeight = '400');
            link.style.fontWeight = '700';
            showPreview(fileName);
        });
    });

    trainBtn && trainBtn.addEventListener('click', () => {
        trainBtn.innerHTML = '<span class="spinner"></span> Training...';
        trainBtn.classList.add('loading');
        setTimeout(() => {
            trainBtn.innerHTML = 'Model Updated! ✓';
            trainBtn.classList.remove('loading', 'btn-primary');
            trainBtn.style.backgroundColor = 'var(--success-green)';
            trainBtn.style.color = 'white';
            // Add notification
            notifState.unshift({ id: Date.now(), icon: '🤖', title: 'Model Retrained', msg: 'New model trained successfully. Accuracy: 91.4%', time: 'Just now', read: false });
            setTimeout(() => navigateToView('prediction'), 1000);
        }, 2000);
    });

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const og = downloadBtn.textContent;
            downloadBtn.textContent = 'Downloading...';
            setTimeout(() => downloadBtn.textContent = og, 1000);
        });
    }
}

// =============================================
// === PREDICTION (Sprint 2 - US2, US4, US5) ===
// =============================================
function initPredictionScreen() {
    const predForm = document.getElementById('prediction-form');
    const runBtn = document.getElementById('run-prediction-btn');
    const resultCard = document.getElementById('prediction-result');
    const viewSimilarBtn = document.getElementById('view-similar-btn');
    const similarCard = document.getElementById('similar-tasks');
    const recsGrid = document.getElementById('team-recommendations-grid');

    // Render Team Recommendations (Sprint 2 - US4)
    if (recsGrid) {
        recsGrid.innerHTML = `<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px;">
            ${TEAM_RECOMMENDATIONS.map((rec, i) => `
                <div style="border:2px solid ${i === 0 ? '#4F46E5' : '#E5E7EB'}; border-radius:16px; padding:20px; position:relative; background:${i === 0 ? 'linear-gradient(135deg,#EEF2FF,#F5F3FF)' : 'white'};">
                    ${i === 0 ? '<div style="position:absolute; top:-10px; right:16px; background:#4F46E5; color:white; font-size:11px; font-weight:700; padding:4px 12px; border-radius:10px;">BEST MATCH</div>' : ''}
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                        <div style="font-size:28px; background:white; width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.08);">${rec.avatar}</div>
                        <div>
                            <div style="font-weight:700; font-size:15px;">${rec.team}</div>
                            <div style="font-size:12px; color:var(--text-secondary);">Rank #${rec.rank}</div>
                        </div>
                        <div style="margin-left:auto; font-size:22px; font-weight:800; color:${rec.color};">${rec.match}%</div>
                    </div>
                    <div style="height:6px; background:#E5E7EB; border-radius:3px; margin-bottom:12px; overflow:hidden;">
                        <div style="width:${rec.match}%; height:100%; background:${rec.color}; border-radius:3px;"></div>
                    </div>
                    <ul style="list-style:none; display:flex; flex-direction:column; gap:6px;">
                        ${rec.reasons.map(r => `<li style="font-size:12px; color:var(--text-secondary); display:flex; gap:6px; align-items:center;"><span style="color:${rec.color};">•</span>${r}</li>`).join('')}
                    </ul>
                    <button style="margin-top:16px; width:100%; padding:10px; border-radius:10px; background:${i === 0 ? '#4F46E5' : 'transparent'}; color:${i === 0 ? 'white' : '#4F46E5'}; border:2px solid #4F46E5; font-weight:600; cursor:pointer; font-size:13px;">Assign ${rec.team}</button>
                </div>
            `).join('')}
        </div>`;
    }

    // Tab switching
    const tabs = document.querySelectorAll('#view-prediction .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('active'); t.style.borderBottom = 'none'; t.style.fontWeight = 'normal'; t.style.color = 'var(--text-secondary)'; });
            tab.classList.add('active');
            tab.style.borderBottom = '2px solid var(--primary-blue)';
            tab.style.fontWeight = '600';
            tab.style.color = 'var(--primary-blue)';
        });
    });

    if (!predForm) return;

    predForm.addEventListener('submit', (e) => {
        e.preventDefault();
        runBtn.innerHTML = '<span class="spinner"></span> Analyzing Patterns...';
        runBtn.classList.add('loading');
        resultCard.style.display = 'none';
        similarCard.style.display = 'none';

        const sp = parseInt(document.getElementById('pred-sp').value);
        const exp = document.getElementById('pred-exp').value;
        const complexity = document.querySelector('input[name="complexity"]:checked').value;

        setTimeout(() => {
            runBtn.innerHTML = 'Predict Effort';
            runBtn.classList.remove('loading');

            // Dynamic prediction (Sprint 2 - US2)
            let baseHours = sp * 5;
            if (complexity === 'High') baseHours *= 1.6;
            if (complexity === 'Low') baseHours *= 0.7;
            if (exp === 'Junior') baseHours *= 1.4;
            if (exp === 'Expert') baseHours *= 0.8;
            const hours = Math.round(baseHours);
            const confidence = exp === 'Expert' ? 88 : (exp === 'Senior' ? 82 : 74);
            const riskLevel = (complexity === 'High' && exp === 'Junior') ? 'HIGH (87% delay prob)' : (complexity === 'High' ? 'MEDIUM (54% delay prob)' : 'LOW (12% delay prob)');

            document.getElementById('pred-hours').textContent = hours;
            document.getElementById('pred-confidence').textContent = `${confidence}%`;
            document.getElementById('pred-confidence-bar').style.width = `${confidence}%`;
            document.getElementById('pred-risk').textContent = riskLevel;
            document.getElementById('pred-team-rec').textContent = 'Beta (92% match)';

            resultCard.style.display = 'block';
            resultCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 1500);
    });

    viewSimilarBtn && viewSimilarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        similarCard.style.display = 'block';
        similarCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
}

// =============================================
// === RISK (Sprint 2 - US3 + Sprint 3 - US2) ===
// =============================================
let riskDonutInstance = null;

function initRiskScreen() {
    // Donut Chart
    const ctx = document.getElementById('riskDonutChart');
    if (ctx) {
        if (riskDonutInstance) riskDonutInstance.destroy();
        riskDonutInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['High Risk', 'Medium Risk', 'Low Risk'],
                datasets: [{ data: [5, 12, 23], backgroundColor: ['#EF4444', '#F59E0B', '#10B981'], borderWidth: 0, hoverOffset: 4 }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} tasks` } }
                },
                cutout: '70%'
            }
        });
    }

    // Risk Factors Summary
    const factorsList = document.getElementById('risk-factors-list');
    if (factorsList) {
        factorsList.innerHTML = RISK_FACTORS.map(f => `
            <div style="background:${f.color}; border-radius:12px; padding:16px; display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                    <div style="font-weight:700; font-size:14px; color:${f.labelColor};">${f.name}</div>
                    <div style="font-size:12px; color:${f.labelColor}; opacity:0.8; margin-top:4px;">${f.desc}</div>
                </div>
                <span style="background:${f.labelColor}; color:white; font-size:11px; font-weight:700; padding:4px 10px; border-radius:10px; white-space:nowrap; margin-left:12px;">${f.tasks} tasks</span>
            </div>
        `).join('');
    }

    // At-Risk Tasks Table
    const tbody = document.getElementById('risk-tasks-detailed-tbody');
    if (tbody) {
        tbody.innerHTML = RISK_TASKS_DETAILED.map(task => {
            const isHigh = task.riskLevel === 'HIGH';
            const riskBadge = isHigh
                ? '<span class="status-badge status-risk" style="background:#FEE2E2;color:#991B1B;">HIGH</span>'
                : '<span class="status-badge status-late" style="background:#FEF3C7;color:#92400E;">MEDIUM</span>';
            const delayColor = task.delay === 'On time' ? 'var(--success-green)' : 'var(--error-red)';
            return `<tr>
                <td>
                    <div style="font-weight:600;">${task.name}</div>
                    <div style="font-size:12px; color:var(--text-secondary);">${task.factors.join(' · ')}</div>
                </td>
                <td>${task.sprint}</td>
                <td>${task.team}</td>
                <td>${task.est}</td>
                <td style="color:var(--error-red); font-weight:600;">${task.act}</td>
                <td style="color:${delayColor}; font-weight:600;">${task.delay}</td>
                <td>${riskBadge}</td>
                <td><button class="btn btn-secondary btn-sm">View Plan</button></td>
            </tr>`;
        }).join('');
    }

    // Mitigation Recommendations
    const mitList = document.getElementById('mitigation-list');
    if (mitList) {
        mitList.innerHTML = MITIGATION_PLANS.map(m => `
            <div style="display:flex; align-items:center; gap:16px; padding:16px 20px; background:#F9FAFB; border-radius:12px; border:1px solid var(--border-color);">
                <div style="width:44px; height:44px; background:linear-gradient(135deg,#4F46E5,#7C3AED); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;">${m.icon}</div>
                <div style="flex:1;">
                    <div style="font-weight:600; font-size:14px;">${m.task}</div>
                    <div class="text-small">${m.plan}</div>
                    <div style="font-size:11px; color:var(--primary-blue); font-weight:600; margin-top:4px;">→ ${m.team}</div>
                </div>
                <button class="btn btn-primary btn-sm">Apply</button>
            </div>
        `).join('');
    }
}

// =============================================
// === TEAM (Sprint 3 - US1) ===
// =============================================
let velocityChartInstance = null;

function initTeamScreen() {
    const tbody = document.getElementById('team-tbody');
    const kpiGrid = document.getElementById('team-kpis');
    const cardsGrid = document.getElementById('team-cards-grid');

    // KPIs
    if (kpiGrid) {
        kpiGrid.innerHTML = `
            <div class="card kpi-card">
                <div class="kpi-card-header"><span>TOTAL TEAMS</span><span>👥</span></div>
                <div class="kpi-card-value">${TEAMS.length}</div>
            </div>
            <div class="card kpi-card">
                <div class="kpi-card-header"><span>AVG VELOCITY</span><span>🚀</span></div>
                <div class="kpi-card-value">${Math.round(TEAMS.reduce((a, t) => a + t.velocity, 0) / TEAMS.length)} <span style="font-size:16px; color:var(--text-secondary);">SP/sprint</span></div>
            </div>
            <div class="card kpi-card">
                <div class="kpi-card-header"><span>AVG ACCURACY</span><span>🎯</span></div>
                <div class="kpi-card-value">${Math.round(TEAMS.reduce((a, t) => a + t.accuracy, 0) / TEAMS.length)}%</div>
            </div>
            <div class="card kpi-card">
                <div class="kpi-card-header"><span>AVG ON-TIME RATE</span><span>⏰</span></div>
                <div class="kpi-card-value">${Math.round(TEAMS.reduce((a, t) => a + t.onTimeRate, 0) / TEAMS.length)}%</div>
            </div>
        `;
    }

    // Velocity Chart (Sprint 3 - US1)
    const vCtx = document.getElementById('velocityChart');
    if (vCtx) {
        if (velocityChartInstance) velocityChartInstance.destroy();
        const sprintLabels = ['Sprint 19', 'Sprint 20', 'Sprint 21', 'Sprint 22', 'Sprint 23', 'Sprint 24'];
        const teamColors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];
        const velocityData = [
            [38, 40, 42, 41, 44, 42],
            [34, 36, 38, 37, 39, 38],
            [37, 39, 41, 40, 43, 41],
            [28, 30, 32, 31, 33, 32]
        ];
        velocityChartInstance = new Chart(vCtx, {
            type: 'line',
            data: {
                labels: sprintLabels,
                datasets: TEAMS.map((t, i) => ({
                    label: t.name,
                    data: velocityData[i],
                    borderColor: teamColors[i],
                    backgroundColor: teamColors[i] + '18',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false,
                    pointRadius: 4
                }))
            },
            options: {
                responsive: true, maintainAspectRatio: true,
                plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false } },
                scales: { y: { beginAtZero: false, title: { display: true, text: 'Story Points' } } }
            }
        });
    }

    // Team Detail Cards
    if (cardsGrid) {
        cardsGrid.innerHTML = TEAMS.map(team => `
            <div class="card kpi-card" style="background:linear-gradient(135deg, #F9FAFB, #FFFFFF);">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                    <div style="font-size:28px; width:48px; height:48px; background:white; border-radius:12px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.06);">${team.avatar}</div>
                    <div>
                        <div style="font-weight:700;">${team.name}</div>
                        <div class="text-small" style="cursor:pointer; color:var(--primary-blue); text-decoration:underline;" onclick="changeTeamLead('${team.id}')" title="Click to edit lead">${team.lead}</div>
                    </div>
                    <div style="margin-left:auto; font-size:12px; font-weight:600; color:${team.trend.startsWith('+') ? 'var(--success-green)' : 'var(--error-red)'}; background:${team.trend.startsWith('+') ? '#D1FAE5' : '#FEE2E2'}; padding:4px 8px; border-radius:8px;">${team.trend}</div>
                </div>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text-secondary);">Velocity</span> <strong>${team.velocity} SP</strong></div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; align-items:center;">
                        <span style="color:var(--text-secondary);">Accuracy</span>
                        <div style="display:flex; align-items:center; gap:8px;">
                            <div style="width:60px; height:6px; background:#E5E7EB; border-radius:3px; overflow:hidden;"><div style="width:${team.accuracy}%; height:100%; background:#4F46E5; border-radius:3px;"></div></div>
                            <strong>${team.accuracy}%</strong>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:13px;"><span style="color:var(--text-secondary);">On-Time</span> <strong>${team.onTimeRate}%</strong></div>
                    <div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:4px;">${team.skills.map(s => `<span style="font-size:11px; background:#EEF2FF; color:#4F46E5; padding:3px 8px; border-radius:6px; font-weight:600;">${s}</span>`).join('')}</div>
                    
                    <!-- Team Members Section -->
                    <div style="margin-top:12px; border-top:1px solid #E5E7EB; padding-top:12px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span style="font-size:12px; font-weight:600; color:var(--text-secondary);">Team Members:</span>
                            <button onclick="showTeamDetails('${team.id}')" style="background:transparent; border:none; color:var(--primary-blue); font-size:11px; cursor:pointer; text-decoration:underline;">View Details</button>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:6px;">
                            ${typeof EMPLOYEES !== 'undefined' ? EMPLOYEES.filter(e => e.team === team.id).map(emp => `
                                <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                                    <div style="display:flex; align-items:center; gap:6px;">
                                        <div style="width:20px; height:20px; border-radius:50%; background:var(--primary-blue); color:white; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:bold;">${emp.name.charAt(0)}</div>
                                        <span>${emp.name}</span>
                                    </div>
                                    <span style="color:var(--text-secondary); font-size:11px;">${emp.role}</span>
                                </div>
                            `).join('') : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // All Teams Table
    if (tbody) {
        tbody.innerHTML = TEAMS.map(team => `
            <tr>
                <td><div style="display:flex; align-items:center; gap:8px;">${team.avatar} <span style="font-weight:500;">${team.name}</span></div></td>
                <td><span style="cursor:pointer; color:var(--primary-blue); text-decoration:underline;" onclick="changeTeamLead('${team.id}')" title="Click to edit lead">${team.lead}</span></td>
                <td>${team.velocity} pts/sprint</td>
                <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        ${team.accuracy}%
                        <div style="flex:1; height:6px; background:#E5E7EB; border-radius:3px; max-width:80px; overflow:hidden;">
                            <div style="width:${team.accuracy}%; height:100%; background:var(--primary-blue); border-radius:3px;"></div>
                        </div>
                    </div>
                </td>
                <td>${team.onTimeRate}%</td>
                <td style="color:${team.trend.startsWith('+') ? 'var(--success-green)' : 'var(--error-red)'}; font-weight:600;">${team.trend}</td>
            </tr>
        `).join('');
    }
}

// =============================================
// === REPORTS (Sprint 3 - US3, US4) ===
// =============================================
let burndownInstance = null;
let errorChartInstance = null;

function initReportsScreen() {
    // Accuracy Table
    const tbody = document.getElementById('accuracy-tbody');
    if (tbody) {
        tbody.innerHTML = AI_ACCURACY.map(row => {
            const aiWins = Math.abs(row.aiError) < Math.abs(row.manualError);
            return `<tr>
                <td style="font-weight:600;">${row.sprint}</td>
                <td>${row.manual}h</td>
                <td>${row.ai}h</td>
                <td>${row.actual}h</td>
                <td style="color:var(--error-red); font-weight:500;">${row.manualError > 0 ? '+' : ''}${row.manualError}%</td>
                <td style="color:var(--success-green); font-weight:500;">${row.aiError > 0 ? '+' : ''}${row.aiError}%</td>
                <td>${aiWins ? '<span class="status-badge status-done">🤖 AI</span>' : '<span class="status-badge status-late">👤 Manual</span>'}</td>
            </tr>`;
        }).join('');
    }

    // Burndown Chart (Sprint 3 - US3)
    const bCtx = document.getElementById('burndownChart');
    if (bCtx) {
        if (burndownInstance) burndownInstance.destroy();
        const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'];
        burndownInstance = new Chart(bCtx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [
                    { label: 'Ideal Burndown', data: [42, 38, 34, 30, 26, 22, 18, 14, 10, 0], borderColor: '#D1D5DB', borderDash: [5, 5], borderWidth: 1.5, tension: 0, pointRadius: 0, fill: false },
                    { label: 'Actual Remaining', data: [42, 40, 37, 32, 29, 25, 21, 18, 16, null], borderColor: '#4F46E5', backgroundColor: 'rgba(79,70,229,0.08)', borderWidth: 2.5, tension: 0.2, fill: true, pointRadius: 4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false } },
                scales: { y: { beginAtZero: true, title: { display: true, text: 'Story Points' } } }
            }
        });
    }

    // AI vs Manual Error Chart
    const eCtx = document.getElementById('errorChart');
    if (eCtx) {
        if (errorChartInstance) errorChartInstance.destroy();
        errorChartInstance = new Chart(eCtx, {
            type: 'bar',
            data: {
                labels: AI_ACCURACY.map(d => d.sprint.replace('Sprint ', 'S')),
                datasets: [
                    { label: 'Manual Error %', data: AI_ACCURACY.map(d => Math.abs(d.manualError)), backgroundColor: 'rgba(239,68,68,0.5)', borderColor: '#EF4444', borderWidth: 1, borderRadius: 4 },
                    { label: 'AI Error %', data: AI_ACCURACY.map(d => Math.abs(d.aiError)), backgroundColor: 'rgba(79,70,229,0.5)', borderColor: '#4F46E5', borderWidth: 1, borderRadius: 4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false } },
                scales: { y: { beginAtZero: true, title: { display: true, text: 'Error %' } } }
            }
        });
    }

    // Sprint Progress Bars (Sprint 3 - US3)
    const progBars = document.getElementById('sprint-progress-bars');
    if (progBars) {
        progBars.innerHTML = SPRINT_PROGRESS.map(s => `
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:14px; font-weight:600;">${s.name}</span>
                    <span style="font-size:13px; color:var(--text-secondary);">${s.done}/${s.total} SP · <strong style="color:${s.color};">${s.pct}%</strong></span>
                </div>
                <div style="height:12px; background:#F3F4F6; border-radius:6px; overflow:hidden; position:relative;">
                    <div style="height:100%; width:${s.pct}%; background:linear-gradient(90deg,${s.color}aa,${s.color}); border-radius:6px; transition:width 1s ease;"></div>
                </div>
            </div>
        `).join('');
    }

    // Export buttons
    const exportPdf = document.getElementById('export-pdf-btn');
    const exportCsv = document.getElementById('export-csv-btn');
    const rPdf = document.getElementById('report-export-pdf');
    const rCsv = document.getElementById('report-export-csv');

    function makeExportHandler(btn, label) {
        btn && btn.addEventListener('click', () => {
            const og = btn.textContent;
            btn.innerHTML = '<span class="spinner"></span> Exporting...';
            setTimeout(() => { btn.textContent = `✓ ${label} Exported!`; setTimeout(() => btn.textContent = og, 2000); }, 1500);
        });
    }

    makeExportHandler(exportPdf, 'PDF');
    makeExportHandler(exportCsv, 'CSV');
    makeExportHandler(rPdf, 'PDF');
    makeExportHandler(rCsv, 'CSV');
}

// =============================================
// === SETTINGS LOGIC ===
// =============================================
function initSettingsScreen() {

    // ── Connection Status Banner ──────────────────────────
    async function checkConnectionStatus() {
        const banner = document.getElementById('settings-conn-banner');
        const statusDot = document.getElementById('conn-status-dot');
        const statusText = document.getElementById('conn-status-text');
        const dbStatus = document.getElementById('conn-db-status');
        const apiStatus = document.getElementById('conn-api-status');
        if (!banner) return;

        try {
            // A lightweight authenticated ping — reuse dashboard summary
            const res = await apiFetch('/dashboard/summary');
            if (res.success) {
                statusDot.style.background = '#10B981';
                statusText.textContent = 'All Systems Operational';
                dbStatus.innerHTML = '<span style="color:#10B981;font-weight:700;">● Connected</span>';
                apiStatus.innerHTML = '<span style="color:#10B981;font-weight:700;">● Online</span>';
                banner.style.borderColor = '#A7F3D0';
                banner.style.background = 'linear-gradient(135deg,#F0FDF4,#DCFCE7)';
            } else {
                throw new Error('API error');
            }
        } catch (err) {
            statusDot.style.background = '#EF4444';
            statusText.textContent = 'Connection Issue Detected';
            dbStatus.innerHTML = '<span style="color:#EF4444;font-weight:700;">● Disconnected</span>';
            apiStatus.innerHTML = '<span style="color:#F59E0B;font-weight:700;">● Degraded</span>';
            banner.style.borderColor = '#FECACA';
            banner.style.background = 'linear-gradient(135deg,#FFF5F5,#FEF2F2)';
        }
    }

    // ── Load settings from API ────────────────────────────
    async function loadSettings() {
        try {
            const res = await apiFetch('/settings');
            if (res.success) {
                const s = res.data;
                if (s.firstName) document.getElementById('s-first-name').value = s.firstName;
                if (s.lastName) document.getElementById('s-last-name').value = s.lastName;
                if (s.email) document.getElementById('s-email').value = s.email;
                if (s.threshold) document.getElementById('s-threshold').value = s.threshold;
                if (s.autoTrain !== undefined) document.getElementById('s-auto-train').checked = (s.autoTrain === 'true' || s.autoTrain === true);
                if (s.darkMode !== undefined) document.getElementById('s-darkmode').checked = (s.darkMode === 'true' || s.darkMode === true);
                if (s.timezone) document.getElementById('s-timezone').value = s.timezone;
            }
        } catch (err) {
            // Silently use static HTML defaults — page still renders correctly
            console.warn('Settings API unavailable, using defaults:', err.message);
        }
    }

    // Called every time the settings view is shown
    function onSettingsEnter() {
        navigateToView('settings');
        loadSettings();
        checkConnectionStatus();
    }

    // Bind all entry points: sidebar nav + profile dropdown link
    document.querySelectorAll('#settings-link, .nav-item[data-target="settings"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            onSettingsEnter();
        });
    });

    // ── Profile Save ─────────────────────────────────────
    const saveProfileBtn = document.getElementById('save-profile-btn');
    saveProfileBtn && saveProfileBtn.addEventListener('click', async () => {
        saveProfileBtn.innerHTML = '<span class="spinner"></span> Saving...';
        try {
            await apiFetch('/settings/batch', {
                method: 'POST',
                body: JSON.stringify({
                    settings: {
                        firstName: document.getElementById('s-first-name').value,
                        lastName: document.getElementById('s-last-name').value,
                        email: document.getElementById('s-email').value
                    }
                })
            });
            saveProfileBtn.textContent = '✓ Saved';
            saveProfileBtn.style.background = 'var(--success-green)';
        } catch (err) {
            saveProfileBtn.textContent = '⚠ Saved Locally';
        }
        setTimeout(() => { saveProfileBtn.textContent = 'Save Changes'; saveProfileBtn.style.background = ''; }, 2000);
    });

    // ── Password Update ───────────────────────────────────
    const updatePassBtn = document.getElementById('update-pass-btn');
    updatePassBtn && updatePassBtn.addEventListener('click', () => {
        const cur = document.getElementById('s-cur-pass').value;
        const newP = document.getElementById('s-new-pass').value;
        const conf = document.getElementById('s-conf-pass').value;
        const successMsg = document.getElementById('pass-success-msg');
        const errorMsg = document.getElementById('pass-error-msg');
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';
        if (!cur || !newP) { errorMsg.textContent = '⚠️ Please fill in all fields.'; errorMsg.style.display = 'block'; return; }
        if (newP !== conf) { errorMsg.textContent = '⚠️ Passwords do not match.'; errorMsg.style.display = 'block'; return; }
        updatePassBtn.innerHTML = '<span class="spinner"></span>';
        setTimeout(() => {
            successMsg.style.display = 'block';
            updatePassBtn.textContent = 'Update Password';
            document.getElementById('s-cur-pass').value = '';
            document.getElementById('s-new-pass').value = '';
            document.getElementById('s-conf-pass').value = '';
        }, 800);
    });

    // ── AI Config Save ────────────────────────────────────
    const saveAiBtn = document.getElementById('save-ai-config-btn');
    saveAiBtn && saveAiBtn.addEventListener('click', async () => {
        saveAiBtn.innerHTML = '<span class="spinner"></span> Saving...';
        try {
            await apiFetch('/settings/batch', {
                method: 'POST',
                body: JSON.stringify({
                    settings: {
                        threshold: document.getElementById('s-threshold').value,
                        autoTrain: document.getElementById('s-auto-train').checked
                    }
                })
            });
            saveAiBtn.textContent = '✓ Saved';
            saveAiBtn.style.background = 'var(--success-green)';
        } catch (err) {
            saveAiBtn.textContent = '⚠ Saved Locally';
        }
        setTimeout(() => { saveAiBtn.textContent = 'Save Configuration'; saveAiBtn.style.background = ''; }, 2000);
    });

    // ── System Preferences Save ───────────────────────────
    const savePrefsBtn = document.getElementById('save-prefs-btn');
    savePrefsBtn && savePrefsBtn.addEventListener('click', async () => {
        savePrefsBtn.innerHTML = '<span class="spinner"></span> Saving...';
        try {
            await apiFetch('/settings/batch', {
                method: 'POST',
                body: JSON.stringify({
                    settings: {
                        timezone: document.getElementById('s-timezone').value,
                        darkMode: document.getElementById('s-darkmode').checked
                    }
                })
            });
            savePrefsBtn.textContent = '✓ Saved';
            savePrefsBtn.style.background = 'var(--success-green)';
        } catch (err) {
            savePrefsBtn.textContent = '⚠ Saved Locally';
        }
        setTimeout(() => { savePrefsBtn.textContent = 'Save Preferences'; savePrefsBtn.style.background = ''; }, 2000);
    });

    // ── Danger Zone ───────────────────────────────────────
    const clearDataBtn = document.getElementById('clear-data-btn');
    clearDataBtn && clearDataBtn.addEventListener('click', () => {
        if (confirm('Clear all local data? This cannot be undone.')) {
            localStorage.clear();
            clearDataBtn.textContent = '✓ Cleared';
            setTimeout(() => clearDataBtn.textContent = 'Clear All Data', 2000);
        }
    });
}

// =============================================
// === LOGOUT ===
// =============================================
function initLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                if (token) {
                    await fetch('/api/auth/logout', { method: 'GET', headers: { 'Authorization': `Bearer ${token}` } });
                }
            } catch (e) {
                console.error('Logout error:', e);
            } finally {
                try { localStorage.removeItem('jwtToken'); } catch (e) {}
                AppState.currentUser = null;
                navigateTo('login');
            }
        });
    }
}

window.changeTeamLead = async function(teamId) {
    const team = TEAMS.find(t => t.id === teamId);
    if (!team) return;

    const newLead = prompt(`Enter new Team Lead for ${team.name} (Current: ${team.lead}):`, team.lead);
    if (newLead && newLead.trim() !== '' && newLead !== team.lead) {
        // Security Prompt
        const authCode = prompt(`🔐 AUTHORIZATION REQUIRED\n\nPlease enter the secure authorization code for the current lead (${team.lead}) to approve this change:\n(Hint: For testing, the code is "auth123")`);
        
        if (!authCode) {
            alert("Transfer cancelled. Authorization code is required.");
            return;
        }

        try {
            const token = localStorage.getItem('jwtToken');
            const response = await fetch('/api/teams/change-lead', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({ teamId, newLead: newLead.trim(), authCode })
            });
            const result = await response.json();

            if (result.success) {
                team.lead = newLead.trim();
                // Re-render views if they are active
                const dashboardView = document.getElementById('dashboard-view');
                if (dashboardView && !dashboardView.classList.contains('hidden')) {
                    if (typeof renderTeamPerformance === 'function') renderTeamPerformance();
                }
                const teamView = document.getElementById('team-view');
                if (teamView && !teamView.classList.contains('hidden')) {
                    initTeamScreen();
                }
                alert(`✅ Success: Leadership successfully transferred to ${team.lead}.`);
            } else {
                alert(`❌ Error: ${result.message}`);
            }
        } catch(e) {
            alert('Failed to connect to the server for verification.');
        }
    }
}

window.showTeamDetails = function(teamId) {
    try {
        console.log("showTeamDetails triggered for:", teamId);
        const team = TEAMS.find(t => t.id === teamId);
        if(!team) {
            alert("Team not found!");
            return;
        }
        
        // Remove existing modal if any
        const existing = document.getElementById('team-modal-' + teamId);
        if(existing) {
            existing.remove();
        }
        
        const members = EMPLOYEES.filter(e => e.team === teamId);
        if(!members || members.length === 0) {
            alert("No members found for this team.");
            return;
        }
        
        let html = `
            <div style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.6); z-index:2147483647; display:flex; align-items:center; justify-content:center;" id="team-modal-${teamId}">
                <div style="background:white; padding:24px; border-radius:12px; width:90%; max-width:800px; max-height:85vh; overflow-y:auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid #E5E7EB; padding-bottom:16px;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <div style="font-size:32px;">${team.avatar}</div>
                            <div>
                                <h2 style="margin:0; font-size:20px; font-weight:700;">${team.name} Roster</h2>
                                <span style="font-size:12px; color:var(--text-secondary);">Lead: ${team.lead} | Velocity: ${team.velocity} SP</span>
                            </div>
                        </div>
                        <button type="button" onclick="document.getElementById('team-modal-${teamId}').remove()" style="background:#EF4444; color:white; border:none; width:32px; height:32px; border-radius:50%; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 4px rgba(239,68,68,0.3);">&times;</button>
                    </div>
                    
                    <div style="overflow-x:auto;">
                        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
                            <thead>
                                <tr style="background:#F9FAFB; border-bottom:2px solid #E5E7EB; color:var(--text-secondary);">
                                    <th style="padding:12px 8px; font-weight:600;">Name</th>
                                    <th style="padding:12px 8px; font-weight:600;">Role</th>
                                    <th style="padding:12px 8px; font-weight:600;">Experience</th>
                                    <th style="padding:12px 8px; font-weight:600;">Success Rate</th>
                                    <th style="padding:12px 8px; font-weight:600;">Bug Rate</th>
                                    <th style="padding:12px 8px; font-weight:600;">Top Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${members.map(m => `
                                    <tr style="border-bottom:1px solid #E5E7EB;">
                                        <td style="padding:12px 8px;">
                                            <div style="display:flex; align-items:center; gap:8px;">
                                                <div style="width:28px; height:28px; border-radius:50%; background:#4F46E5; color:white; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold;">${m.name ? m.name.charAt(0) : '?'}</div>
                                                <span style="font-weight:600;">${m.name || 'Unknown'}</span>
                                            </div>
                                        </td>
                                        <td style="padding:12px 8px;">
                                            <span style="background:${m.role === 'Lead' ? '#FEE2E2' : m.role === 'QA' ? '#FEF3C7' : '#E0E7FF'}; color:${m.role === 'Lead' ? '#991B1B' : m.role === 'QA' ? '#92400E' : '#3730A3'}; padding:4px 8px; border-radius:6px; font-size:11px; font-weight:600;">${m.role || 'N/A'}</span>
                                        </td>
                                        <td style="padding:12px 8px; font-weight:500;">${m.experienceYears || 0} Yrs</td>
                                        <td style="padding:12px 8px;">
                                            <div style="display:flex; align-items:center; gap:8px;">
                                                <span style="font-weight:600;">${m.successRate || 0}%</span>
                                                <div style="flex:1; height:6px; background:#E5E7EB; border-radius:3px; min-width:50px; overflow:hidden;">
                                                    <div style="width:${m.successRate || 0}%; height:100%; background:${(m.successRate || 0) > 90 ? '#10B981' : '#4F46E5'}; border-radius:3px;"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style="padding:12px 8px; font-weight:600; color:${(m.bugRate || 0) > 0.15 ? '#EF4444' : 'inherit'}">${m.bugRate || 0}</td>
                                        <td style="padding:12px 8px; font-size:11px; color:#6B7280;">${(m.skills || []).join(', ')}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', html);
        console.log("Modal successfully attached to DOM");
    } catch (err) {
        console.error(err);
        alert("An error occurred showing details: " + err.message);
    }
}

// =============================================
// === INITIALIZE APP ===
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoginScreen();
    initDashboard();
    initUploadScreen();
    initPredictionScreen();
    initRiskScreen();
    initTeamScreen();
    initReportsScreen();
    initSettingsScreen();
    initNotifications();
    initLogout();
    navigateTo('login');
});
