module Jekyll
  class RenderIconTag < Liquid::Tag

    def initialize(tag_name, icon, tokens)
      super
      @icon_class_list = icon
    end

    def render(context)
      "<i class=\"#{@icon_class_list}\"></i>"
    end
  end
  
end

Liquid::Template.register_tag('icon', Jekyll::RenderIconTag)
