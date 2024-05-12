import { JsonProperty } from "json-object-mapper";

export class Author {
  @JsonProperty({name: 'key'}) id = '';
  @JsonProperty() name = '';
  @JsonProperty({name: 'work_count'}) workCount ? = 0;
  @JsonProperty({name: 'top_subjects'}) topSubjects ? = [];
  @JsonProperty({name: 'photos'}) photoId ? = '';
  @JsonProperty({name: 'birth_date'}) birthDate ? = '';
  @JsonProperty({name: 'top_work'}) topWork ? = '';
}