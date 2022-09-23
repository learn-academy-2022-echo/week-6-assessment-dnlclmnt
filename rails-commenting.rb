# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is our blog posts controller, where we'll be defining the methods for CRUD functionality
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # We are assigning an instance variable @posts to BlogPost.all. This will allow us to view all the blog posts in our database.
    @posts = BlogPost.all
  end

  # ---3)
  # The show method will allow us to view a specific blog post, using its ID to view the specific post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new method will show a form for the user to create a new item, a new blog post. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Create method will create a new item in the server. In this case, it is how we are able to add new blog posts to our database. We are also passing private strong params to prevent any malicious activity from occurring with our database. Only posts that meet our strong params criteria will be able to be posted.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    #We are using the find method to edit on a particular blog post, using its ID to find the exact post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # We are once again using strong params to check for validity of the blog post when it's updated. If it meets the criteria of our params, the post will update and redirect to the updated post's page. If it isn't valid, we will redirect back to the edit page for that specific blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # This is taking us back to the blog post we were attempting to destroy with the destroy method. This will execute if we aren't able to destroy the post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Making our blog_post_params private is a way we can encapsulate our method and is a security measure we can use to prevent exploitation.
  private
  def blog_post_params
    # ---10)
    # This is defining that the params must have a key of blog_post. Permit allows the title and content keys to be accepted.
    params.require(:blog_post).permit(:title, :content)
  end
end
