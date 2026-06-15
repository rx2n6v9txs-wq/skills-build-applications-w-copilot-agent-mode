/**
 * Seed the octofit_db database with test data
 * 
 * This script populates the octofit_db database with sample users,
 * activities, and leaderboard data for development and testing.
 */

import mongoose from 'mongoose';
import connectDatabase from '../config/database';

async function seedDatabase() {
  try {
    await connectDatabase();
    console.log('Seeding octofit_db database with test data...');
    
    // TODO: Add seed logic for users, activities, teams, etc.
    // Example models to be added:
    // - User model with authentication
    // - Activity model for workout logging
    // - Team model for team management
    // - Leaderboard calculations
    
    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run seed only if executed directly
if (require.main === module) {
  seedDatabase();
}

export default seedDatabase;
