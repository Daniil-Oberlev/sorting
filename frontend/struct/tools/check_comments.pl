#!/usr/bin/perl
use strict;
use warnings;
use File::Find;

my $log_file = 'comments_log.txt';

open my $log_fh, '>', $log_file or die "Не могу открыть файл '$log_file': $!";

my $total_comments = 0;

sub check_comments {
    my $file = $_;

    return if $file =~ m{/(node_modules|\.vscode|\.next|\.git|\.husky|yarn.lock|next-env.d.ts)/};

    if ( $file =~ /\.(ts|tsx)$/ ) {
        open my $fh, '<', $file or die "Не могу открыть файл '$file': $!";
        my $file_comments = 0;

        while ( my $line = <$fh> ) {
            if ( $line =~ /^\s*\/\// || $line =~ /^\s*\/\*\*?/ ) {
                print "Комментарий найден в файле: $file\n";
                print $log_fh "Комментарий найден в файле: $file\n";
                $file_comments++;
            }
        }

        close $fh;

        if ($file_comments > 0) {
            print "В файле $file найдено комментариев: $file_comments\n";
            $total_comments += $file_comments;
        }
    }
}

my $root_directory = './';
chdir $root_directory or die "Не могу перейти в корневую директорию: $!";

find( \&check_comments, '.' );

close $log_fh;

my $current_dir = `pwd`;
print "Текущая директория после проверки: $current_dir\n";
print "Общее количество комментариев найдено: $total_comments\n";
