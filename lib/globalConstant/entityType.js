/**
 * Class for entity types.
 *
 * @class EntityType
 */
class EntityType {
  /**
   * Get internal entity type string for user ids.
   *
   * @returns {string}
   */
  get userIds() {
    return 'userIds';
  }

  /**
   * Get internal entity type string for users map.
   *
   * @returns {string}
   */
  get usersMap() {
    return 'usersMap';
  }

  /**
   * Get internal entity type string for meta of getAllUsersList api.
   *
   * @returns {string}
   */
  get getAllUsersListMeta() {
    return 'getAllUsersListMeta';
  }

  /**
   * Get internal entity type string for upload params map.
   *
   * @returns {string}
   */
  get uploadParams() {
    return 'uploadParams';
  }

  /**
   * Get internal entity type string for s3 urls.
   *
   * @returns {string}
   */
  get s3Urls() {
    return 's3Urls';
  }
}

module.exports = new EntityType();