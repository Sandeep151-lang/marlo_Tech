

exports.createDocument = (model, data) =>{
  model.save()
}

  exports.getAllDocuments = async (model, query, options) => {
    query = await filterService.getFilterQuery(query);
    return new Promise((resolve, reject) => {
        model.paginate(query, options, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
  };
