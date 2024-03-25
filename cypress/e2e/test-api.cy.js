describe('API Tests', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('should get a post by id', () => {
    cy.request(`${baseUrl}/posts/1`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('userId');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('body');
    });
  });

  it('should get a list of posts', () => {
    cy.request(`${baseUrl}/posts`).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('should create a new post', () => {
    const newPost = {
      userId: 1,
      title: 'New Post Title',
      body: 'This is the body of the new post'
    };

    cy.request('POST', `${baseUrl}/posts`, newPost).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.userId).to.eq(newPost.userId);
      expect(response.body.title).to.eq(newPost.title);
      expect(response.body.body).to.eq(newPost.body);
    });
  });

  it('should update a post by id', () => {
    const updatedPost = {
      id: 1,
      userId: 1,
      title: 'Updated Post Title',
      body: 'This is the updated body of the post'
    };

    cy.request('PUT', `${baseUrl}/posts/${updatedPost.id}`, updatedPost).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(updatedPost.id);
      expect(response.body.userId).to.eq(updatedPost.userId);
      expect(response.body.title).to.eq(updatedPost.title);
      expect(response.body.body).to.eq(updatedPost.body);
    });
  });

  it('should delete a post by id', () => {
    const postIdToDelete = 1;

    cy.request('DELETE', `${baseUrl}/posts/${postIdToDelete}`).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
