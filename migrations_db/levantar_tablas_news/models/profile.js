'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    user_id: DataTypes.INTEGER,
    kyc_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    type_profile_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
    account_number_length: DataTypes.INTEGER(40),
    active: DataTypes.BOOLEAN,
    endAt: DataTypes.DATE
  }, 
  {indexes:[{ unique: true, fields:['id']},
            { fields:['user_id']},
            { fields:['kyc_id']},
            { fields:['role_id']},
            { fields:['type_profile_id']}]},
  { tableName: 'profiles'});
  },
   Profile.associate = function(models) {
//     Profile.belongsTo(models.User, {
//       foreignKey: 'user_id',
//     });
//     Profile.belongsTo(models.Kyc, {
//       foreignKey: 'kyc_id',
//     });
    Profile.belongsTo(models.Role, {
      foreignKey: 'role_id',
    });

    Profile.belongsTo(models.TypeProfile, {
      foreignKey: 'type_profile_id',
    });
    Profile.belongsToMany(models.Balance, { 
      through: 'ProfileBalance',
      foreignKey: 'profile_id',
      otherKey: 'balance_id'
    });

    Profile.hasMany(models.Account, {
      foreignKey: 'profile_id',
    });
    
    // si tx_cripto no esta en el modelo no saldra implicito, la relacion es por debajo
    Profile.hasMany(models.Tx_cripto, {
      foreignKey: 'profile_id',
    });

    Profile.hasMany(models.Kyc, {
      foreignKey: 'profile_id',
    });
    
    Profile.belongsToMany(models.Business, { 
      through: 'ProfileBusinessClient',
      foreignKey: 'profile_id',
      otherKey: 'business_id'
    });
      
    Profile.belongsTo(models.Favorite, {
      foreignKey: 'profile_id',
    });
    Profile.belongsTo(models.Favorite, {
      foreignKey: 'profile_client_id',
    });
  };
  return Profile;
};





