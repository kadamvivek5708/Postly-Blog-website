import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featured_image);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12">
            <Container>
                {/* Header: Title left, actions right */}
                <div className="max-w-5xl mx-auto flex justify-between items-center mb-4">
                    <h1 className="text-4xl font-bold text-primary">{post.title}</h1>
                    {isAuthor && (
                        <div className="flex space-x-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button variant="accent" className="shadow-md border border-black">Edit</Button>
                            </Link>
                            <Button variant="danger" className="shadow-md border border-black" onClick={deletePost}>Delete</Button>
                        </div>
                    )}
                </div>

                {/* Featured Image (letterboxed, not cropped) */}
                <div className="max-w-5xl mx-auto mb-8 ">
                    <img
                        src={appwriteService.getFileView(post.featured_image)}
                        alt={post.title}
                        className="w-full rounded-xl shadow-lg border border-black"
                        style={{ maxHeight: '600px', objectFit: 'contain' }}
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-5xl mx-auto bg-light/30 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-accent/20">
                    <div className="browser-css text-primary">
                        {parse(post.content)}
                    </div>
                </div>

                {/* Timestamp */}
                <div className="max-w-5xl mx-auto mt-4">
                    <p className="text-right text-sm text-black italic">
                        {post.$createdAt ? `Published on: ${new Date(post.$createdAt).toLocaleDateString('en-GB')}` : ''}
                    </p>
                </div>

            </Container>
        </div>
    ) : null;
}