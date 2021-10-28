import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateFollows1621461868385 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'follows',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment'
          },
          {
            name: 'user_username',
            type: 'varchar'
          },
          {
            name: 'follower_username',
            type: 'varchar'
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
      'follows',
      new TableForeignKey({
        name: 'FollowingUser',
        columnNames: ['user_username'],
        referencedTableName: 'users',
        referencedColumnNames: ['username'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'follows',
      new TableForeignKey({
        name: 'FollowerUser',
        columnNames: ['follower_username'],
        referencedTableName: 'users',
        referencedColumnNames: ['username'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('follows', 'FollowerUser');
    await queryRunner.dropForeignKey('follows', 'FollowingUser');
    await queryRunner.dropTable('follows');
  }
}
