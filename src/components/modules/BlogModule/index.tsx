import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { BrandingConfig } from '../../../config';

interface BlogModuleProps {
  branding: BrandingConfig;
}

export default function BlogModule({ branding }: BlogModuleProps) {
  const blogPosts = [
    {
      id: 1,
      title: "Latest Industry Trends",
      excerpt: "Discover the latest trends and innovations in our industry.",
      author: "John Doe",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Best Practices Guide",
      excerpt: "Learn about the best practices that drive success.",
      author: "Jane Smith",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Customer Success Stories",
      excerpt: "Read about how we've helped our clients succeed.",
      author: "Mike Johnson",
      date: "2024-01-05"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest articles and insights.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Blog Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 