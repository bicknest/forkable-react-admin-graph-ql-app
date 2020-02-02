import graphene

from graphene_django.types import DjangoObjectType

from base_app.posts.models import Post


class PostType(DjangoObjectType):
    class Meta:
        model = Post


class Query(object):
    all_posts = graphene.List(PostType)

    def resolve_all_posts(self, info, **kwargs):
        return Post.objects.all()
