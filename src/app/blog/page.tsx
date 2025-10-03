import Link from 'next/link';
import Image from 'next/image';
import { posts, Post } from '@/lib/blog-posts';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/client/reveal';

export const metadata = {
  title: 'Blog | MECANO SOLUTIONS',
  description: 'Artículos, noticias y consejos sobre estanterías metálicas, optimización de bodegas y sistemas de almacenaje industrial.',
};

export default function BlogIndex() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[120px]">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <Reveal>
              <h1 className="font-headline font-extrabold tracking-tight text-5xl lg:text-7xl text-center mb-4 text-white">
                Nuestro <span className="text-primary">Blog</span>
              </h1>
              <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto text-slate-200 text-center">
                Artículos, noticias y consejos sobre optimización de bodegas y sistemas de almacenaje.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const postImage = PlaceHolderImages.find((img) => img.id === post.image);
                return (
                  <Reveal key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      <Card className="h-full bg-card border-border hover:-translate-y-2 hover:shadow-orange transition-all duration-300 flex flex-col group">
                        {postImage && (
                           <div className="aspect-video rounded-t-lg overflow-hidden">
                            <Image
                              src={postImage.imageUrl}
                              alt={post.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={postImage.imageHint}
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="flex-grow">
                                <div className="flex gap-2 mb-2">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                            </div>
                           <div className="text-sm text-muted-foreground mt-4">{post.date}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
