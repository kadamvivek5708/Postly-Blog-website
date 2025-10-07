import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import Button from '../components/Button';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    let isMounted = true;
    appwriteService
      .getPosts()
      .then((result) => {
        if (!isMounted) return;
        if (result && result.documents) {
          setPosts(result.documents);
        } else {
          setPosts([]);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero - only when logged OUT */}
      {!authStatus && (
        <section className="gradient-bg flex flex-col items-center justify-center min-h-[110vh] text-center px-6 py-32 overflow-hidden">
          {/* Heading */}
            <h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl"
                style={{
                    color: "white",
                    WebkitTextStroke: "0.7px black", // thick black border
                    textShadow: "2px 2px 6px rgba(0,0,0,0.5)" // extra shadow for depth
                }}
                >
                Share Your Voice with the World 🌍
            </h1>


          {/* Subtext */}
          <p className="text-light/90 text-lg md:text-xl max-w-2xl mb-12 opacity-0 animate-fade-slide-down animation-delay-400">
            Express your thoughts, tell your story, and inspire others. A space where every writer finds their readers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                    <button
                    className="px-8 py-3 rounded-xl text-base font-semibold bg-primary text-light 
                                hover:bg-transparent hover:text-black 
                                hover:shadow-lg hover:scale-105 
                                transition-all duration-300 focus:outline-none"
                    >
                    Get Started
                    </button>
                </Link>

                <Link to="/login">
                    <button
                    className="px-8 py-3 rounded-xl text-base font-semibold bg-primary text-light 
                                hover:bg-transparent hover:text-black 
                                hover:shadow-lg hover:scale-105 
                                transition-all duration-300 focus:outline-none"
                    >
                    Explore Blogs
                    </button>
                </Link>
        </div>




          {/* Decorative Line */}
          <div className="mt-20 w-32 h-1 bg-accent rounded-full opacity-0 animate-fade-slide-up animation-delay-800"></div>
        </section>
      )}

      <Container>
        {/* Loading State */}
        {loading && (
          <div className="py-12">
            <h2 className="text-3xl font-bold text-primary mb-2 text-center" id="explore">
              {authStatus ? `Welcome back, ${userData?.name || 'Reader'}!` : 'Latest Blog Posts'}
            </h2>
            <p className="text-secondary text-center mb-6">
              {authStatus
                ? 'Ready to dive in? Here are the latest articles from the community.'
                : 'Discover our collection of thoughtful articles and insights.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="w-full bg-light rounded-2xl p-5 h-64 card-shadow border border-accent/20 animate-pulse">
                  <div className="w-full h-32 bg-accent/30 rounded-xl mb-4" />
                  <div className="h-5 bg-accent/30 rounded mb-2" />
                  <div className="h-5 bg-accent/20 rounded w-2/3" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State - logged in only */}
        {!loading && posts.length === 0 && authStatus && (
          <div className="w-full py-16 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="p-8 w-full max-w-2xl">
                <div className="bg-light/80 backdrop-blur-sm rounded-3xl p-12 card-shadow border border-accent/20">
                  <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-3">Your blog is ready!</h2>
                  <p className="text-secondary mb-6">Be the first to share your voice. Write your first post and engage with the community.</p>
                  <div className="flex justify-center">
                    <Button onClick={() => navigate('/add-post')} variant="primary" size="md">Create First Post</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && posts.length > 0 && (
          <div className="py-12">
            <h2 className="text-3xl font-bold text-primary mb-2 text-center">
              {authStatus ? `Welcome back, ${userData?.name || 'Reader'}!` : 'Latest Blog Posts'}
            </h2>
            <p className="text-secondary text-center mb-6">
              {authStatus
                ? 'Ready to dive in? Here are the latest articles from the community.'
                : 'Discover our collection of thoughtful articles and insights.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <div key={post.$id} className="animate-fade-in" style={{ animationDelay: `${index * 60}ms` }}>
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
      
