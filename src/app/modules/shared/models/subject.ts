import {JsonProperty} from 'json-object-mapper';

import { Author } from './author';

export class Subject {
  @JsonProperty({name: 'title'}) name = '';
  @JsonProperty({name: 'edition_count'}) editionCount = '';
  @JsonProperty({name: 'cover_id'}) coverId = '';
  @JsonProperty() authors: Author[] = [];
  @JsonProperty({name: 'first_publish_year'}) publishedDate = '';
  @JsonProperty() coverImage = 'https://placehold.co/600x400';
  @JsonProperty() id = '';
}