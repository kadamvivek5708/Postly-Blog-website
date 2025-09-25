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
                <div className="w-full flex justify-center mb-8 relative bg-light/50 backdrop-blur-sm rounded-2xl p-4 card-shadow border border-accent/20">
                    <img
                        src={appwriteService.getFileView(post.featured_image)}
                        alt={post.title}
                        className="rounded-xl w-full max-w-4xl h-96 object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex space-x-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-accent" textColor="text-primary" className="shadow-md">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" textColor="text-white" className="shadow-md" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-8">
                    <h1 className="text-4xl font-bold text-primary leading-tight">{post.title}</h1>
                </div>
                <div className="prose prose-lg max-w-none bg-light/30 backdrop-blur-sm rounded-2xl p-8 card-shadow border border-accent/20">
                    <div className="browser-css text-primary">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}