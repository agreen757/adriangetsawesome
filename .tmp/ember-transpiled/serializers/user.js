define("ghost/serializers/user", 
  ["ghost/serializers/application","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ApplicationSerializer = __dependency1__["default"];

    var UserSerializer = ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
            roles: {embedded: 'always'}
        },

        extractSingle: function (store, primaryType, payload) {
            var root = this.keyForAttribute(primaryType.typeKey),
                pluralizedRoot = Ember.String.pluralize(primaryType.typeKey);

            payload[root] = payload[pluralizedRoot][0];
            delete payload[pluralizedRoot];

            return this._super.apply(this, arguments);
        },

        keyForAttribute: function (attr) {
            return attr;
        },

        keyForRelationship: function (relationshipName) {
            // this is a hack to prevent Ember-Data from deleting our `tags` reference.
            // ref: https://github.com/emberjs/data/issues/2051
            // @TODO: remove this once the situation becomes clearer what to do.
            if (relationshipName === 'roles') {
                return 'role';
            }

            return relationshipName;
        }
    });

    __exports__["default"] = UserSerializer;
  });