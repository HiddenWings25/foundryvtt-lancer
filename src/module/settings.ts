import { LANCER } from "./config";

export const registerSettings = function () {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register(LANCER.sys_name, LANCER.setting_migration, {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: 0,
  });

  game.settings.register(LANCER.sys_name, LANCER.setting_core_data, {
    name: "Lancer Data Version",
    scope: "world",
    config: false,
    type: String,
    default: "0.0.0",
  });

  game.settings.register(LANCER.sys_name, LANCER.setting_lcps, {
    name: "Installed LCPs",
    scope: "world",
    config: false,
    type: Object,
  });

  game.settings.register(LANCER.sys_name, LANCER.setting_stock_icons, {
    name: "Keep Stock Icons",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(LANCER.sys_name, LANCER.setting_welcome, {
    name: "Hide Welcome Message",
    hint: "Hide the welcome message for the latest update to the Lancer system.",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(LANCER.sys_name, LANCER.setting_pilot_oc_heat, {
    name: "Auto-Apply Overcharge Heat",
    hint: "When a mech rolls an overcharge, should it automatically apply heat?",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });
};
