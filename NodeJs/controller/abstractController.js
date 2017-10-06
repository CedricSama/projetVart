let express = require('express');

class AbstractController {
  constructor(model) {
    this.router = express.Router();
    this.model = model;
    // this.service = require(Service);
    /*    this.router.get('/', ((request, response) => {
          this.service.getAll(request.param.id, (DataBaseData) => {
            response.json(DataBaseData);
          });
        }));*/
    this.router.get('/', ((request, response) => {
      // this.model.findById(request.param.id, (SelectedData)=>{
      this.model.findAll().then((SelectedData) => {
        response.json(SelectedData);
      })
    }));
    /*this.router.get('/search', ((request, response) => {
      this.service.findByResearch(request.param)
    }));
    this.router.put('/', ((request, response) => {
    }));
    this.router.post('/', ((request, response) => {
    }));
    this.router.delete('/:id', ((request, response) => {
    }));*/
  }

  getRoot() {
    return this.router;
  }
}

module.exports.Controller = AbstractController;
