import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateComments1621187552445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'comment',
            type: 'varchar'
          },
          {
            name: 'post_id',
            type: 'uuid'
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true
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
      'comments',
      new TableForeignKey({
        name: 'CommentPost',
        columnNames: ['post_id'],
        referencedTableName: 'posts',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'comments',
      new TableForeignKey({
        name: 'CommentUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('comments', 'CommentUser');
    await queryRunner.dropForeignKey('comments', 'CommentPost');
    await queryRunner.dropTable('comments');
  }
}
