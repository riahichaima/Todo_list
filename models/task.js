module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('to do', 'doing', 'done'),
      allowNull: false,
      defaultValue: 'to do',
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects',
        key: 'id',
      },
    },
  }, {
    tableName: 'tasks',
    timestamps: true,
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Project, {
      foreignKey: 'projectId',
      as: 'project',
    });
  };

  return Task;
};
