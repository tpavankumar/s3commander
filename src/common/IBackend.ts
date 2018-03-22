import {Bucket} from './Bucket';
import {Path} from './Path';
import {Folder} from './Folder';
import {IFolderContents} from './IFolderContents';
import {IUploadConfig} from './IUploadConfig';
import {File} from './File';
import {IFileVersion} from './IFileVersion';

export interface IBackend {
  /**
   * Get a bucket with the given name.
   */
  getBucket(name: string): Promise<Bucket>;

  /**
   * Get the contents of a folder.
   */
  getContents(bucket: Bucket, folder: Folder): Promise<IFolderContents>;

  /**
   * Create a folder.
   */
  createFolder(bucket: Bucket, folder: Folder): Promise<any>;

  /**
   * Delete a folder and its contents.
   */
  deleteFolder(bucket: Bucket, folder: Folder): Promise<any>;

  /**
   * Get settings necessary to upload files to the given folder.
   */
  getUploadConfig(bucket: Bucket, folder: Folder): IUploadConfig;

  /**
   * Get versions of the given file.
   */
  getFileVersions(bucket: Bucket, file: File): Promise<IFileVersion[]>;

  /**
   * Delete a file.
   */
  deleteFile(bucket: Bucket, file: File): Promise<any>;
}
