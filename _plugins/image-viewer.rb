module Jekyll
  class RenderImageTag < Liquid::Tag

    def initialize(tag_name, image_src, tokens)
      super
      @image_src = image_src
    end

    def render(context)
      "<img src=\"#{@image_src}\" alt=\"#{@image_src}\" class='thumbnail image-gallery-thumbnail'/>"
    end
  end
  
end

Liquid::Template.register_tag('image', Jekyll::RenderImageTag)
