process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Rides', () => {
    describe('/GET rides', () => {
        it('it should GET all the rides offered', (done) => {
            chai.request(app)
                .get('/api/v1/rides')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/POST rides', () => {
        it('it should not POST a ride without all  fields filled', (done) => {
            let ride = {
                name: "The Lord of the Rings",
                departure: "Benin",
                arrival: 'Plateau',
                amount: "N5,000",
                available_Seats: 1,
                date: '05-05-2018',
                time: '11:00 am'
            }
            chai.request(app)
                .post('/api/v1/rides')
                .send(ride)
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.errors.pages.should.have.property('kind').eql('required');
                    done();
                });
        });
        //     it('it should POST a new ride ', (done) => {
        //         let ride = {
        //             title: "The Lord of the Rings",
        //             author: "J.R.R. Tolkien",
        //             year: 1954,
        //             pages: 1170
        //         }
        //         chai.request(app)
        //             .post('/ride')
        //             .send(ride)
        //             .end((err, res) => {
        //                 res.should.have.status(200);
        //                 res.body.should.be.a('object');
        //                 res.body.should.have.property('message').eql('Book successfully added!');
        //                 res.body.book.should.have.property('title');
        //                 res.body.book.should.have.property('author');
        //                 res.body.book.should.have.property('pages');
        //                 res.body.book.should.have.property('year');
        //                 done();
        //             });
        //     });
        // });
        // describe('/GET/:id ride', () => {
        //     it('it should GET a ride by the given id', (done) => {
        //         let book = new Book({ title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, pages: 1170 });
        //         book.save((err, book) => {
        //             chai.request(app)
        //                 .get('/book/' + book.id)
        //                 .send(book)
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.body.should.be.a('object');
        //                     res.body.should.have.property('title');
        //                     res.body.should.have.property('author');
        //                     res.body.should.have.property('pages');
        //                     res.body.should.have.property('year');
        //                     res.body.should.have.property('_id').eql(book.id);
        //                     done();
        //                 });
        //         });

        //     });
        // });
        // describe('/PUT/:id book', () => {
        //     it('it should UPDATE a book given the id', (done) => {
        //         let book = new Book({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778 })
        //         book.save((err, book) => {
        //             chai.request(app)
        //                 .put('/book/' + book.id)
        //                 .send({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, pages: 778 })
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.body.should.be.a('object');
        //                     res.body.should.have.property('message').eql('Book updated!');
        //                     res.body.book.should.have.property('year').eql(1950);
        //                     done();
        //                 });
        //         });
        //     });
        // });
        // /*
        //  * Test the /DELETE/:id route
        //  */
        // describe('/DELETE/:id book', () => {
        //     it('it should DELETE a book given the id', (done) => {
        //         let book = new Book({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778 })
        //         book.save((err, book) => {
        //             chai.request(app)
        //                 .delete('/book/' + book.id)
        //                 .end((err, res) => {
        //                     res.should.have.status(200);
        //                     res.body.should.be.a('object');
        //                     res.body.should.have.property('message').eql('Book successfully deleted!');
        //                     res.body.result.should.have.property('ok').eql(1);
        //                     res.body.result.should.have.property('n').eql(1);
        //                     done();
        //                 });
        //         });
        //     });
        // });
        // 
    }
    )
});