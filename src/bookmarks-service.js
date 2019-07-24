const bookmarksService = {
  getAllBookmarks(knex) {
    return knex.select('*').from('bookmarks');
  },
  insertBookmark(knex, newbookmark) {
    return knex
      .insert(newbookmark)
      .into('bookmarks')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
   
    return knex.from('bookmarks').select('*').where('id', id).first();
  },
  deleteBookmark(knex, id) {
    return knex('bookmarks')
      .where({ id })
      .delete();
  },
  updateBookmark(knex, id, newbookmarkFields) {
    return knex('bookmarks')
      .where({ id })
      .update(newbookmarkFields);
  },
};
  
module.exports = bookmarksService;
  