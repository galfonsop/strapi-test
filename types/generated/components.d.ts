import type { Schema, Struct } from '@strapi/strapi';

export interface HispasatApplication extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_applications';
  info: {
    displayName: 'application';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'vass_outline:hispasat_app'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    TYPE: Schema.Attribute.Enumeration<['CLIENT', 'USER']>;
  };
}

export interface HispasatApplicationsList extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_applications_lists';
  info: {
    description: '';
    displayName: 'Applications_list';
  };
  attributes: {
    applications: Schema.Attribute.Component<'hispasat.application', true>;
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    grid: Schema.Attribute.Component<'hispasat.grid', false>;
    title: Schema.Attribute.String;
    view_all: Schema.Attribute.String;
    viewAll_link: Schema.Attribute.String;
  };
}

export interface HispasatFooter extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_footers';
  info: {
    description: '';
    displayName: 'footer';
    icon: 'dashboard';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'hispasat.footer-block', true>;
    certification_logos: Schema.Attribute.Component<'hispasat.logo', true>;
    enterprise_copyright: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    social_logos: Schema.Attribute.Component<'hispasat.logo', true>;
  };
}

export interface HispasatFooterBlock extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_footer_blocks';
  info: {
    displayName: 'footer_block';
    icon: 'apps';
  };
  attributes: {
    block: Schema.Attribute.Component<'hispasat.footer-link', true>;
  };
}

export interface HispasatFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_footer_links';
  info: {
    displayName: 'footer_link';
    icon: 'attachment';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HispasatGrid extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_grids';
  info: {
    description: '';
    displayName: 'grid';
  };
  attributes: {
    desktop: Schema.Attribute.Enumeration<
      [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
      ]
    > &
      Schema.Attribute.DefaultTo<'grid-cols-3'>;
    mobile: Schema.Attribute.Enumeration<
      [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
      ]
    > &
      Schema.Attribute.DefaultTo<'grid-cols-1'>;
    tablet: Schema.Attribute.Enumeration<
      [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
      ]
    > &
      Schema.Attribute.DefaultTo<'grid-cols-2'>;
  };
}

export interface HispasatIncidences extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_incidences';
  info: {
    description: '';
    displayName: 'incidences';
  };
  attributes: {
    description: Schema.Attribute.String;
    info_date: Schema.Attribute.DateTime;
    info_description: Schema.Attribute.String;
    info_title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    state: Schema.Attribute.Enumeration<
      ['ACTIVE', 'CLOSED', 'REPORTED', 'PENDING']
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HispasatIncidencesList extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_incidences_lists';
  info: {
    description: '';
    displayName: 'Incidences_list';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    grid: Schema.Attribute.Component<'hispasat.grid', false>;
    incidences: Schema.Attribute.Component<'hispasat.incidences', true>;
    title: Schema.Attribute.String;
    view_all: Schema.Attribute.String;
  };
}

export interface HispasatLogo extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_logos';
  info: {
    description: '';
    displayName: 'logo';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HispasatNews extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_news';
  info: {
    description: '';
    displayName: 'news';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
  };
}

export interface HispasatNewsList extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_news_lists';
  info: {
    description: '';
    displayName: 'news-list';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    grid: Schema.Attribute.Component<'hispasat.grid', false>;
    link: Schema.Attribute.String;
    linkTitle: Schema.Attribute.String;
    news: Schema.Attribute.Component<'hispasat.news', true>;
    title: Schema.Attribute.String;
  };
}

export interface HispasatProDev extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_pro_devs';
  info: {
    description: '';
    displayName: 'pro-dev';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    moreInfo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HispasatProDevList extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_pro_dev_lists';
  info: {
    description: '';
    displayName: 'pro-dev_list';
    icon: 'bulletList';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    grid: Schema.Attribute.Component<'hispasat.grid', false>;
    items: Schema.Attribute.Component<'hispasat.pro-dev', true>;
    title: Schema.Attribute.String;
  };
}

export interface HispasatShortcut extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_shortcuts';
  info: {
    displayName: 'shortcut';
    icon: 'attachment';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HispasatShortcutList extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_shortcut_lists';
  info: {
    description: '';
    displayName: 'shortcut_list';
    icon: 'bulletList';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    grid: Schema.Attribute.Component<'hispasat.grid', false>;
    shortcuts: Schema.Attribute.Component<'hispasat.shortcut', true>;
    title: Schema.Attribute.String;
  };
}

export interface HispasatSlide extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_slides';
  info: {
    description: '';
    displayName: 'Slide';
    icon: 'calendar';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HispasatSlideList extends Struct.ComponentSchema {
  collectionName: 'components_hispasat_slide_lists';
  info: {
    displayName: 'Slide-list';
    icon: 'chartBubble';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    slides: Schema.Attribute.Component<'hispasat.slide', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hispasat.application': HispasatApplication;
      'hispasat.applications-list': HispasatApplicationsList;
      'hispasat.footer': HispasatFooter;
      'hispasat.footer-block': HispasatFooterBlock;
      'hispasat.footer-link': HispasatFooterLink;
      'hispasat.grid': HispasatGrid;
      'hispasat.incidences': HispasatIncidences;
      'hispasat.incidences-list': HispasatIncidencesList;
      'hispasat.logo': HispasatLogo;
      'hispasat.news': HispasatNews;
      'hispasat.news-list': HispasatNewsList;
      'hispasat.pro-dev': HispasatProDev;
      'hispasat.pro-dev-list': HispasatProDevList;
      'hispasat.shortcut': HispasatShortcut;
      'hispasat.shortcut-list': HispasatShortcutList;
      'hispasat.slide': HispasatSlide;
      'hispasat.slide-list': HispasatSlideList;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
