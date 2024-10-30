import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2" style={{ backgroundColor: 'black' }}></div>

                <div className="col-10 mt-5">
                    <div className="mx-auto" style={{ maxWidth: '600px' }}>
                        <h2 className="text-center mb-4">Create post</h2>
                        
                        
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                type="text" 
                                id="title" 
                                className="form-control" 
                                placeholder="Title*" 
                            />
                        </div>
                        
                       
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Body</label>
                            <textarea 
                                id="content" 
                                className="form-control" 
                                rows="5" 
                                placeholder="Body*"
                            ></textarea>
                        </div>
                        
                        
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Upload image</label>
                            <input 
                                type="file" 
                                id="image" 
                                className="form-control" 
                                accept="image/*" 
                            />
                        </div>
                    
                        <button className="btn btn-secondary w-100"> Post </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;

