'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
 
    static associate({ Project }) {
      this.belongsTo(Project, { foreignKey: 'projectId' })
    }
  }
  Task.init({
    name: DataTypes.TEXT,
    status: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
