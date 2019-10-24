"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mergeConfiguration = _interopRequireDefault(require("merge-configuration"));

var _config = require("@reactant/config");

function overrideCracoConfig({
  cracoConfig
}) {
  const config = (0, _config.getConfig)();
  return (0, _mergeConfiguration.default)(cracoConfig, config.craco);
}

module.exports = {
  reactScriptsVersion: 'expo',
  plugins: [{
    plugin: {
      overrideCracoConfig
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvY3JhY28uY29uZmlnLnRzIl0sIm5hbWVzIjpbIm92ZXJyaWRlQ3JhY29Db25maWciLCJjcmFjb0NvbmZpZyIsImNvbmZpZyIsImNyYWNvIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlYWN0U2NyaXB0c1ZlcnNpb24iLCJwbHVnaW5zIiwicGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7O0FBRUEsU0FBU0EsbUJBQVQsQ0FBNkI7QUFDM0JDLEVBQUFBO0FBRDJCLENBQTdCLEVBSWdCO0FBQ2QsUUFBTUMsTUFBTSxHQUFHLHdCQUFmO0FBQ0EsU0FBTyxpQ0FBZ0NELFdBQWhDLEVBQTZDQyxNQUFNLENBQUNDLEtBQXBELENBQVA7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLG1CQUFtQixFQUFFLE1BRE47QUFFZkMsRUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRUMsSUFBQUEsTUFBTSxFQUFFO0FBQ05SLE1BQUFBO0FBRE07QUFEVixHQURPO0FBRk0sQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVyZ2VDb25maWd1cmF0aW9uIGZyb20gJ21lcmdlLWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQ3JhY29Db25maWcgfSBmcm9tICdAY3JhY28vY3JhY28nO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnQHJlYWN0YW50L2NvbmZpZyc7XG5cbmZ1bmN0aW9uIG92ZXJyaWRlQ3JhY29Db25maWcoe1xuICBjcmFjb0NvbmZpZ1xufToge1xuICBjcmFjb0NvbmZpZzogQ3JhY29Db25maWc7XG59KTogQ3JhY29Db25maWcge1xuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcbiAgcmV0dXJuIG1lcmdlQ29uZmlndXJhdGlvbjxDcmFjb0NvbmZpZz4oY3JhY29Db25maWcsIGNvbmZpZy5jcmFjbyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWFjdFNjcmlwdHNWZXJzaW9uOiAnZXhwbycsXG4gIHBsdWdpbnM6IFtcbiAgICB7XG4gICAgICBwbHVnaW46IHtcbiAgICAgICAgb3ZlcnJpZGVDcmFjb0NvbmZpZ1xuICAgICAgfVxuICAgIH1cbiAgXVxufSBhcyBDcmFjb0NvbmZpZztcbiJdfQ==