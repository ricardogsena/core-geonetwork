(function() {
  goog.provide('gn_fields');


  goog.require('gn_crs_selector');
  goog.require('gn_directory_entry_selector');
  goog.require('gn_editor_helper_directive');
  goog.require('gn_field_duration_directive');
  goog.require('gn_fields_directive');
  goog.require('gn_template_field_directive');

  angular.module('gn_fields', [
    'gn_fields_directive',
    'gn_crs_selector',
    'gn_field_duration_directive',
    'gn_editor_helper_directive',
    'gn_template_field_directive',
    'gn_directory_entry_selector'
  ]);
})();
