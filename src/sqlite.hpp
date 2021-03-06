#ifndef _EVMCONT_SQLITE_
#define _EVMCONT_SQLITE_

#include "pchheader.hpp"

namespace sql
{
    /**
    * Define an enum and a string array for the column data types.
    * Any column data type that needs to be supportes should be added to both the 'COLUMN_DATA_TYPE' enum and the 'column_data_type' array in its respective order.
    */
    enum COLUMN_DATA_TYPE
    {
        INT,
        TEXT,
        BLOB
    };

    /**
     * Struct of table column information.
     * {
     *  string name   Name of the column.
     *  column_type   Data type of the column.
     *  is_key        Whether column is a key.
     *  is_null       Whether column is nullable.
     * }
    */
    struct table_column_info
    {
        std::string name;
        COLUMN_DATA_TYPE column_type;
        bool is_null;

        table_column_info(std::string_view name, const COLUMN_DATA_TYPE &column_type, const bool is_null = true)
            : name(name), column_type(column_type), is_null(is_null)
        {
        }
    };

    int open_db(std::string_view db_name, sqlite3 **db, const bool writable = false, const bool journal = true);

    int exec_sql(sqlite3 *db, std::string_view sql, int (*callback)(void *, int, char **, char **) = NULL, void *callback_first_arg = NULL);

    int begin_transaction(sqlite3 *db);

    int commit_transaction(sqlite3 *db);

    int rollback_transaction(sqlite3 *db);

    int create_table(sqlite3 *db, std::string_view table_name, const std::vector<table_column_info> &column_info, std::string_view primary_keys);

    int create_index(sqlite3 *db, std::string_view table_name, std::string_view column_names, const bool is_unique);

    int close_db(sqlite3 **db);

    int initialize_db(sqlite3 *db);

    int account_exists(sqlite3 *db, std::string_view addr);

    int get_account_balance(sqlite3 *db, std::string_view addr, void *balance);

    int get_account_code(sqlite3 *db, std::string_view addr, std::string &code);

    int get_account_code_size(sqlite3 *db, std::string_view addr, size_t &size);

    int account_storage_exists(sqlite3 *db, std::string_view addr, std::string_view key);

    int get_account_storage(sqlite3 *db, std::string_view addr, std::string_view key, void *value);

    int insert_account(sqlite3 *db, std::string_view addr, std::string_view balance, std::string_view code);

    int insert_account_storage(sqlite3 *db, std::string_view addr, std::string_view key, std::string_view value);

    int update_account_code(sqlite3 *db, std::string_view addr, std::string_view code);

    int update_account_storage(sqlite3 *db, std::string_view addr, std::string_view key, std::string_view value);

    int get_account_count(sqlite3 *db, uint64_t &count);

    int get_account_storage_count(sqlite3 *db, uint64_t &count);
}
#endif
