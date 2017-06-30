#!/usr/bin/env perl

my $rv = "";

while(<>) {
  s/\n/\\n/;
  s/\'/\\\'/g;
  $rv .= $_;
}

print $rv;

