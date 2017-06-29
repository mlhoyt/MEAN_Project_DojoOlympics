#!/usr/bin/env perl

my $rv = "";

while(<>) {
  s/\n/\\n/;
  $rv .= $_;
}

print $rv;

