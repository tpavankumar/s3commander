import * as angular from 'angular';

import {FileInputDirective} from './input/FileInputDirective';
import {SubmitFormDirective} from './input/SubmitFormDirective';
import {DropzoneDirective} from './dropzone/DropzoneDirective';

import {FileComponent} from './file/FileComponent';
import {FolderComponent} from './folder/FolderComponent';
import {UploadFormComponent} from './uploadForm/UploadFormComponent';
import {BucketComponent} from './bucket/BucketComponent';
import {DropzoneComponent} from './dropzone/DropzoneComponent';

import {S3SessionComponent} from './s3session/S3SessionComponent';

import './index.css';
import '../node_modules/dropzone/dist/dropzone.css';

// register components and configure the module.
angular
  .module('s3commander', [])
  .config(($sceDelegateProvider: any) => {
    // https://docs.angularjs.org/api/ng/provider/$sceDelegateProvider
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',

      // amazon s3 (generic url, bucket url, bucket url in govcloud regions)
      'https://s3.amazonaws.com/*',
      'https://*.s3.amazonaws.com/',
      'https://*.s3.*.amazonaws.com/'
    ]);
  })
  .directive('fileInput', [() => new FileInputDirective()])
  .directive('submitForm', [() => new SubmitFormDirective()])
  .directive('dropzone', [() => new DropzoneDirective()])
  .component('file', FileComponent)
  .component('folder', FolderComponent)
  .component('uploadform', UploadFormComponent)
  .component('bucket', BucketComponent)
  .component('s3session', S3SessionComponent)
  .component('dropzone', DropzoneComponent);
