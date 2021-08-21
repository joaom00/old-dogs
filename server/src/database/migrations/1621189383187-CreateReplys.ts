import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateReplys1621189383187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'replys',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'reply',
            type: 'varchar'
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'post_id',
            type: 'uuid'
          },
          {
            name: 'comment_id',
            type: 'int'
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'replys',
      new TableForeignKey({
        name: 'ReplyUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
    );

    await queryRunner.createForeignKey(
      'replys',
      new TableForeignKey({
        name: 'ReplyPost',
        columnNames: ['post_id'],
        referencedTableName: 'posts',
        referencedColumnNames: ['id']
      })
    );

    await queryRunner.createForeignKey(
      'replys',
      new TableForeignKey({
        name: 'ReplyComment',
        columnNames: ['comment_id'],
        referencedTableName: 'comments',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('replys', 'ReplyComment');
    await queryRunner.dropForeignKey('replys', 'ReplyPost');
    await queryRunner.dropForeignKey('replys', 'ReplyUser');
    await queryRunner.dropTable('replys');
  }
}
