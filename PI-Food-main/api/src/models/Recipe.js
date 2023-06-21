const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID, //Universally Unique Identifier
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING
    },
    sumary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.FLOAT //Almacena valores numericos con decimales hasta 6 Ej: 3.143456
    },
    steps: {
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.FLOAT
    },
    diet: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {timestamps: false});
};
