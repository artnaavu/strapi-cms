import type { Schema, Struct } from '@strapi/strapi';

export interface CourseArtistDetails extends Struct.ComponentSchema {
  collectionName: 'components_course_artist_details';
  info: {
    displayName: 'Artist Details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlight_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface CourseBanner extends Struct.ComponentSchema {
  collectionName: 'components_course_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    banner_image_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    banner_image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_text: Schema.Attribute.String;
    course_title_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CourseChapters extends Struct.ComponentSchema {
  collectionName: 'components_course_chapters';
  info: {
    description: '';
    displayName: 'Chapters';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    duration: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CourseCompletedArt extends Struct.ComponentSchema {
  collectionName: 'components_course_completed_arts';
  info: {
    displayName: 'completed_art';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CourseDescriptionDetails extends Struct.ComponentSchema {
  collectionName: 'components_course_description_details';
  info: {
    displayName: 'Description Details';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CourseFaQs extends Struct.ComponentSchema {
  collectionName: 'components_course_fa_qs';
  info: {
    description: '';
    displayName: 'FAQs';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface CourseHighlights extends Struct.ComponentSchema {
  collectionName: 'components_course_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CourseMaterials extends Struct.ComponentSchema {
  collectionName: 'components_course_materials';
  info: {
    displayName: 'materials';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    has_materials: Schema.Attribute.Boolean;
  };
}

export interface CourseMetaDetails extends Struct.ComponentSchema {
  collectionName: 'components_course_meta_details';
  info: {
    displayName: 'Meta Details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CoursePrice extends Struct.ComponentSchema {
  collectionName: 'components_course_prices';
  info: {
    description: '';
    displayName: 'Price';
  };
  attributes: {
    display_price: Schema.Attribute.Integer;
    material_kit_price: Schema.Attribute.Integer;
    offer_end_date: Schema.Attribute.DateTime;
    offer_price: Schema.Attribute.Integer;
    show_offer_price: Schema.Attribute.Boolean;
  };
}

export interface CourseSkillName extends Struct.ComponentSchema {
  collectionName: 'components_course_skill_names';
  info: {
    description: '';
    displayName: 'Skill Name';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CourseSkillsTaught extends Struct.ComponentSchema {
  collectionName: 'components_course_skills_taughts';
  info: {
    description: '';
    displayName: 'Skills Taught';
  };
  attributes: {
    description: Schema.Attribute.Text;
    skills: Schema.Attribute.Component<'course.skill-name', true>;
    title: Schema.Attribute.String;
  };
}

export interface CourseStudentWorks extends Struct.ComponentSchema {
  collectionName: 'components_course_student_works';
  info: {
    displayName: 'Student Works';
  };
  attributes: {
    project_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    student_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    student_name: Schema.Attribute.String;
    testimonial: Schema.Attribute.Text;
  };
}

export interface CourseVariants extends Struct.ComponentSchema {
  collectionName: 'components_course_variants';
  info: {
    description: '';
    displayName: 'Variants';
  };
  attributes: {
    compare_at_price: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    has_materials: Schema.Attribute.Boolean;
    price: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'course.artist-details': CourseArtistDetails;
      'course.banner': CourseBanner;
      'course.chapters': CourseChapters;
      'course.completed-art': CourseCompletedArt;
      'course.description-details': CourseDescriptionDetails;
      'course.fa-qs': CourseFaQs;
      'course.highlights': CourseHighlights;
      'course.materials': CourseMaterials;
      'course.meta-details': CourseMetaDetails;
      'course.price': CoursePrice;
      'course.skill-name': CourseSkillName;
      'course.skills-taught': CourseSkillsTaught;
      'course.student-works': CourseStudentWorks;
      'course.variants': CourseVariants;
    }
  }
}
