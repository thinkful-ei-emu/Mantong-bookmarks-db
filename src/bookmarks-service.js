const bookmarksService = {
  getAllbookmarks(knex) {
    return knex.select('*').from('bookmarks');
  },
  insertbookmark(knex, newbookmark) {
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
  deletebookmark(knex, id) {
    return knex('bookmarks')
      .where({ id })
      .delete();
  },
  updatebookmark(knex, id, newbookmarkFields) {
    return knex('bookmarks')
      .where({ id })
      .update(newbookmarkFields);
  },
};
  
module.exports = bookmarksService;
  