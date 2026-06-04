require('dotenv').config();
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Team = require('./models/Team');
const Task = require('./models/Task');
const SprintMetric = require('./models/SprintMetric');
const Employee = require('./models/Employee');

const secureCode = bcrypt.hashSync('auth123', 10);

const TEAMS_DATA = [
    { teamId: 'team_alpha', name: 'Team Alpha', lead: 'Sarah Chen', velocity: 42, accuracy: 92, onTimeRate: 95, avatar: '🦅', leadAuthCode: secureCode },
    { teamId: 'team_beta', name: 'Team Beta', lead: 'Mike Rodriguez', velocity: 38, accuracy: 85, onTimeRate: 82, avatar: '⚡', leadAuthCode: secureCode },
    { teamId: 'team_gamma', name: 'Team Gamma', lead: 'David Kim', velocity: 41, accuracy: 88, onTimeRate: 91, avatar: '🛡️', leadAuthCode: secureCode },
    { teamId: 'team_delta', name: 'Team Delta', lead: 'Priya Patel', velocity: 32, accuracy: 79, onTimeRate: 75, avatar: '📱', leadAuthCode: secureCode }
];

const EMPLOYEES_DATA = [
    { employeeId: 'E001', fullName: 'Avinash Sasi', role: 'Developer', team: 'Alpha', experienceYears: 5, skills: ['Node.js', 'React'], projectsCompleted: 12, successfulProjects: 11, failedDelayedProjects: 1, successRate: 91, avgCompletionTime: 30, bugRate: 0.1, performanceRating: 4.5, sprintContributions: 24 },
    { employeeId: 'E002', fullName: 'Sarah Chen', role: 'Lead', team: 'Alpha', experienceYears: 8, skills: ['Architecture', 'Python'], projectsCompleted: 25, successfulProjects: 24, failedDelayedProjects: 1, successRate: 96, avgCompletionTime: 40, bugRate: 0.05, performanceRating: 4.9, sprintContributions: 48 },
    { employeeId: 'E003', fullName: 'Mike Rodriguez', role: 'Lead', team: 'Beta', experienceYears: 7, skills: ['Java', 'Spring'], projectsCompleted: 20, successfulProjects: 18, failedDelayedProjects: 2, successRate: 90, avgCompletionTime: 45, bugRate: 0.15, performanceRating: 4.2, sprintContributions: 38 },
    { employeeId: 'E004', fullName: 'David Kim', role: 'Lead', team: 'Gamma', experienceYears: 6, skills: ['DevOps', 'AWS'], projectsCompleted: 15, successfulProjects: 14, failedDelayedProjects: 1, successRate: 93, avgCompletionTime: 35, bugRate: 0.12, performanceRating: 4.4, sprintContributions: 30 },
    { employeeId: 'E005', fullName: 'Priya Patel', role: 'Lead', team: 'Delta', experienceYears: 9, skills: ['Mobile', 'Flutter'], projectsCompleted: 30, successfulProjects: 25, failedDelayedProjects: 5, successRate: 83, avgCompletionTime: 50, bugRate: 0.2, performanceRating: 3.9, sprintContributions: 55 },
    { employeeId: 'E006', fullName: 'Rohit Sunkuri', role: 'Developer', team: 'Beta', experienceYears: 3, skills: ['Vue.js', 'PHP'], projectsCompleted: 8, successfulProjects: 6, failedDelayedProjects: 2, successRate: 75, avgCompletionTime: 25, bugRate: 0.25, performanceRating: 3.5, sprintContributions: 15 },
    { employeeId: 'E007', fullName: 'Sneha Iyer', role: 'QA', team: 'Gamma', experienceYears: 4, skills: ['Selenium', 'Cypress'], projectsCompleted: 14, successfulProjects: 13, failedDelayedProjects: 1, successRate: 92, avgCompletionTime: 20, bugRate: 0.08, performanceRating: 4.6, sprintContributions: 28 },
    { employeeId: 'E008', fullName: 'John Doe', role: 'Developer', team: 'Alpha', experienceYears: 2, skills: ['HTML', 'CSS'], projectsCompleted: 5, successfulProjects: 4, failedDelayedProjects: 1, successRate: 80, avgCompletionTime: 15, bugRate: 0.3, performanceRating: 3.8, sprintContributions: 10 },
    { employeeId: 'E009', fullName: 'Jane Smith', role: 'Developer', team: 'Beta', experienceYears: 6, skills: ['C++', 'Rust'], projectsCompleted: 18, successfulProjects: 17, failedDelayedProjects: 1, successRate: 94, avgCompletionTime: 42, bugRate: 0.1, performanceRating: 4.7, sprintContributions: 36 },
    { employeeId: 'E010', fullName: 'Alice Johnson', role: 'QA', team: 'Delta', experienceYears: 3, skills: ['Jest', 'Mocha'], projectsCompleted: 10, successfulProjects: 9, failedDelayedProjects: 1, successRate: 90, avgCompletionTime: 18, bugRate: 0.12, performanceRating: 4.1, sprintContributions: 20 },
    { employeeId: 'E011', fullName: 'Bob Williams', role: 'Manager', team: 'Alpha', experienceYears: 12, skills: ['Agile', 'Scrum'], projectsCompleted: 40, successfulProjects: 38, failedDelayedProjects: 2, successRate: 95, avgCompletionTime: 60, bugRate: 0.02, performanceRating: 4.8, sprintContributions: 80 },
    { employeeId: 'E012', fullName: 'Charlie Brown', role: 'Developer', team: 'Gamma', experienceYears: 1, skills: ['JavaScript'], projectsCompleted: 2, successfulProjects: 1, failedDelayedProjects: 1, successRate: 50, avgCompletionTime: 10, bugRate: 0.5, performanceRating: 2.8, sprintContributions: 4 },
    { employeeId: 'E013', fullName: 'Diana Prince', role: 'Developer', team: 'Delta', experienceYears: 7, skills: ['Go', 'Kubernetes'], projectsCompleted: 22, successfulProjects: 21, failedDelayedProjects: 1, successRate: 95, avgCompletionTime: 48, bugRate: 0.05, performanceRating: 4.9, sprintContributions: 44 },
    { employeeId: 'E014', fullName: 'Evan Wright', role: 'QA', team: 'Beta', experienceYears: 2, skills: ['Manual Testing'], projectsCompleted: 6, successfulProjects: 5, failedDelayedProjects: 1, successRate: 83, avgCompletionTime: 12, bugRate: 0.2, performanceRating: 3.7, sprintContributions: 12 },
    { employeeId: 'E015', fullName: 'Fiona Gallagher', role: 'Developer', team: 'Alpha', experienceYears: 4, skills: ['Ruby', 'Rails'], projectsCompleted: 11, successfulProjects: 10, failedDelayedProjects: 1, successRate: 90, avgCompletionTime: 28, bugRate: 0.15, performanceRating: 4.0, sprintContributions: 22 }
];

const SPRINT_METRICS_DATA = [
    { sprint: 'Sprint 19', manual: 320, ai: 295, actual: 287, manualError: 11.5, aiError: 2.8 },
    { sprint: 'Sprint 20', manual: 410, ai: 385, actual: 392, manualError: 4.6, aiError: -1.8 },
    { sprint: 'Sprint 21', manual: 280, ai: 265, actual: 271, manualError: 3.3, aiError: -2.2 },
    { sprint: 'Sprint 22', manual: 350, ai: 338, actual: 345, manualError: 1.4, aiError: -2.0 },
    { sprint: 'Sprint 23', manual: 390, ai: 372, actual: 382, manualError: 2.1, aiError: -2.6 },
    { sprint: 'Sprint 24', manual: 275, ai: 261, actual: 268, manualError: 2.6, aiError: -2.6 }
];

const TASKS_DATA = [
    { taskId: 'T-101', name: 'Payment API Integration', sprintName: 'Sprint 24', complexity: 'High', sp: 8, est: 40, act: 42, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 2, status: 'Completed', risk: 'Low', riskScore: 15 },
    { taskId: 'T-102', name: 'UI Dashboard Redesign', sprintName: 'Sprint 24', complexity: 'Medium', sp: 5, est: 24, act: 28, delay: 'Yes', team: 'Beta', exp: 'Intermediate', bugs: 3, status: 'Completed', risk: 'Medium', riskScore: 42 },
    { taskId: 'T-103', name: 'Database Migration', sprintName: 'Sprint 24', complexity: 'High', sp: 13, est: 65, act: 62, delay: 'No', team: 'Gamma', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low', riskScore: 20 },
    { taskId: 'T-104', name: 'Login Page UI', sprintName: 'Sprint 24', complexity: 'Low', sp: 3, est: 12, act: 10, delay: 'No', team: 'Alpha', exp: 'Junior', bugs: 0, status: 'Completed', risk: 'Low', riskScore: 10 },
    
    { taskId: 'T-106', name: 'User Authentication', sprintName: 'Sprint 24', complexity: 'Medium', sp: 5, est: 24, act: 22, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 1, status: 'Completed', risk: 'Low', riskScore: 18 },
    { taskId: 'T-107', name: 'Data Export Feature', sprintName: 'Sprint 24', complexity: 'Low', sp: 3, est: 15, act: 14, delay: 'No', team: 'Gamma', exp: 'Intermediate', bugs: 0, status: 'Completed', risk: 'Low', riskScore: 8 },
    { taskId: 'T-108', name: 'Analytics Dashboard', sprintName: 'Sprint 24', complexity: 'High', sp: 8, est: 42, act: 45, delay: 'Yes', team: 'Beta', exp: 'Junior', bugs: 5, status: 'At Risk', risk: 'High', riskScore: 87 },
    { taskId: 'T-109', name: 'Email Notification', sprintName: 'Sprint 24', complexity: 'Low', sp: 2, est: 10, act: 8, delay: 'No', team: 'Alpha', exp: 'Senior', bugs: 0, status: 'Completed', risk: 'Low', riskScore: 5 },
    { taskId: 'T-110', name: 'API Documentation', sprintName: 'Sprint 24', complexity: 'Medium', sp: 3, est: 18, act: 20, delay: 'No', team: 'Gamma', exp: 'Expert', bugs: 1, status: 'Completed', risk: 'Low', riskScore: 12 },
    { taskId: 'T-98', name: 'Third-party Integration', sprintName: 'Sprint 23', complexity: 'High', sp: 13, est: 60, act: 72, delay: 'Yes', team: 'Beta', exp: 'Junior', bugs: 6, status: 'Completed', risk: 'High', riskScore: 82 },
    { taskId: 'T-86', name: 'Performance Optimization', sprintName: 'Sprint 22', complexity: 'High', sp: 8, est: 47, act: 44, delay: 'No', team: 'Beta', exp: 'Intermediate', bugs: 2, status: 'Completed', risk: 'Medium', riskScore: 68 }
];

const seedDB = async () => {
    try {
        await connectDB();
        console.log('🌱 Seeding database...');

        // Clear existing data
        await User.deleteMany({});
        await Team.deleteMany({});
        await Task.deleteMany({});
        await SprintMetric.deleteMany({});
        await Employee.deleteMany({});

        // Seed admin user
        await User.create({
            name: 'Sarah Chen',
            email: 'avinashsasi6@gmail.com',
            password: 'Avi@1955',
            role: 'admin'
        });
        console.log('✅ User seeded');

        // Seed employees
        const employees = await Employee.insertMany(EMPLOYEES_DATA);
        console.log('✅ Employees seeded (' + employees.length + ')');

        // Link Tasks to some employees randomly
        const tasksWithAssignees = TASKS_DATA.map((task, i) => {
            const dev = employees.find(e => e.team === task.team && e.role === 'Developer');
            if(dev) task.assignedTo = dev._id;
            return task;
        });

        // Seed teams
        await Team.insertMany(TEAMS_DATA);
        console.log('✅ Teams seeded with hashed auth codes');

        // Seed tasks
        await Task.insertMany(tasksWithAssignees);
        console.log('✅ Tasks seeded with employee references');

        // Seed sprint metrics
        await SprintMetric.insertMany(SPRINT_METRICS_DATA);
        console.log('✅ Sprint metrics seeded');

        console.log('\n🎉 Enterprise Database seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Seeding failed:', err);
        process.exit(1);
    }
};

seedDB();
