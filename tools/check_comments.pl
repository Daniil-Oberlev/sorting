#!/usr/bin/perl
use strict;
use warnings;
use File::Find;

sub check_comments {
    my $file = $_;

    if ( $file =~ /\.(cpp|h|hpp)$/ ) {
        open my $fh, '<', $file or do {
            warn "Не могу открыть файл '$file': $!";
            return;
        };
        my $has_comments = 0;

        while ( my $line = <$fh> ) {
            if ( $line =~ /\/\/|\/\*\*?/ ) {
                print "Комментарий найден в файле: $file\n";
                $has_comments = 1;
                last;
            }
        }

        close $fh;
    }
}

my $root_directory = shift || './';  # Allow directory as argument
chdir $root_directory or die "Не могу перейти в корневую директорию: $!";

find( \&check_comments, '.' );

my $current_dir = `pwd`;
print "Текущая директория после проверки: $current_dir\n";
