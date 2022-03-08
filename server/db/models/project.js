'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {

    static associate({ Task, User }) {
      this.hasMany(Task, { foreignKey: 'projectId' })
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }
  Project.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
