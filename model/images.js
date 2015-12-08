/**
 * Created by jeff8_000 on 2015/12/7.
 */
Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("images")
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});
