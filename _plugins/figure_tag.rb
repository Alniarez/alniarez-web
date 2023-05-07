require "kramdown"

module Jekyll
  class RenderImageTag < Liquid::Block # Liquid::Tag

    def initialize(tag_name, contents, tokens)
      super
    end

    def render(context)
      "<figure>#{Kramdown::Document.new(super).to_html.gsub(/<\/?p>/, '')}</figure>"
    end
  end
  
end

Liquid::Template.register_tag('figure', Jekyll::RenderImageTag)
